import { Injectable, ComponentFactoryResolver, Injector } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, Popup } from 'mapbox-gl';
import { FeatureCollection, Feature } from 'geojson';
import { Observable } from 'rxjs/Observable';
import { City } from '../models/geo/city';
import { Province } from '../models/geo/province';
import { GeoService } from './geo.service';
import { MapPopupComponent } from '../map/map-popup/map-popup.component';
import { MapPopupInfo } from '../models/map/map-popup-info';
import { Renderer2 } from '@angular/core';

@Injectable()
export class MapService {
    map: Map;
    baseMaps: any;
    renderer: Renderer2;

    citiesFeatureCollection: FeatureCollection<any> = {
        type: 'FeatureCollection',
        features: []
    };
    provincesFeatureCollection: FeatureCollection<any> = {
        type: 'FeatureCollection',
        features: []
    };

    citySelected = false;
    provinceSelected = false;

    popup: Popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
    });

    constructor(private geoService: GeoService,
        private resolver: ComponentFactoryResolver,
        private injector: Injector) {
        (mapboxgl as any).accessToken = 'pk.eyJ1IjoicHJhaXJpZWFwcHMiLCJhIjoiY2o2Y2xjd2loMXJqazMzb2xlNzE5ZTBvZyJ9.fNYlFI_mXg_TcaJ4gOaDCA';

        this.baseMaps = [
            { name: 'Street', id: 'street' },
            { name: 'Bright', id: 'bright' },
            { name: 'Light', id: 'light' },
            { name: 'Satellite', id: 'satellite' }
        ];
    }

    initializeMap() {
        this.map.on('load', () => {
            this.initializeCanada();
            this.initializeProvinces();
            this.initializeCities();
        });
    }

    initializeCanada() {
        let canadaBoundaries: Feature<any>;
        this.geoService.getCanadaBoundaries().subscribe(result => {
            canadaBoundaries = result;
            this.map.addLayer({
                'id': 'canada',
                'type': 'fill',
                'source': { type: 'geojson', data: canadaBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#191a1a',
                    'fill-opacity': 0.8
                }
            });

            this.map.fitBounds([[-143.4375, 45.213003555993964], [-49.74609374999999, 67.06743335108298]]);
        });
    }

    initializeProvinces() {
        let provinceBoundaries: Feature<any>;
        this.geoService.getProvinceAreas().subscribe(result => {
            provinceBoundaries = result;

            this.map.addLayer({
                'id': 'province-fills',
                'type': 'fill',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0
                }
            });

            this.map.addLayer({
                'id': 'province-borders',
                'type': 'line',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'line-color': '#627BC1',
                    'line-width': 1,
                    'line-opacity': 1
                }
            });

            this.map.addLayer({
                'id': 'province-fills-hover',
                'type': 'fill',
                'source': { 'type': 'geojson', 'data': provinceBoundaries },
                'layout': {},
                'paint': {
                    'fill-color': '#627BC1',
                    'fill-opacity': 0.2
                },
                'filter': ['==', 'name', '']
            });

            // When the user moves their mouse over the state-fill layer, we'll update the filter in
            // the state-fills-hover layer to only show the matching state, thus making a hover effect.
            this.map.setFilter('province-borders', ['==', 'name', '']);

            this.map.on('mousemove', 'province-fills', (e) => {
                this.map.setFilter('province-borders', ['==', 'name', e.features[0].properties.name]);
            });

            // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
            this.map.on('mouseleave', 'province-fills', () => {
                this.map.setFilter('province-borders', ['==', 'name', '']);
            });

            this.map.on('click', 'province-fills', (e) => {
                if (!this.citySelected && this.map.getZoom() < 9) {
                    // zoom to the selected province
                    const provinceName = e.features[0].properties.name;
                    this.flyToProvince(provinceName);
                }
                this.popup.remove();
            });

            // Change the cursor to a pointer when the mouse is over the state layer.
            this.map.on('mouseenter', 'state-fills', () => {
                this.provinceSelected = true;
                this.map.getCanvas().style.cursor = 'pointer';
            });

            // Change it back to a pointer when it leaves.
            this.map.on('mouseleave', 'state-fills', () => {
                this.provinceSelected = false;
                this.map.getCanvas().style.cursor = '';
            });
        });

        this.geoService.getProvinces().subscribe(result => {
            for (const province of result) {
                this.provincesFeatureCollection.features.push({
                    type: 'Feature',
                    geometry:
                    {
                        type: 'Point',
                        coordinates: [province.lng, province.lat]
                    },
                    properties:
                    {
                        province: province.name,
                        provinceId: province.id,
                        zoomLevel: province.zoom
                    }
                });
            }
        });
    }

    initializeCities() {

        this.geoService.getCities().subscribe(cities => {
            for (const city of cities) {
                this.citiesFeatureCollection.features.push({
                    type: 'Feature',
                    geometry:
                    {
                        type: 'Point',
                        coordinates: [city.lng, city.lat]
                    },
                    properties:
                    {
                        city: city.name,
                        province: city.provinceName,
                        cityId: city.id,
                        provinceId: city.provinceId,
                        zoomLevel: city.zoom
                    }
                });
            }

            this.citiesFeatureCollection.features.forEach((marker) => {

                // create a HTML element for each feature
                const el = document.createElement('div');
                el.className = 'city-default-marker';

                // make a marker for each feature and add to the map
                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(this.map);
            });


            this.map.addLayer({
                'id': 'cities',
                'type': 'circle',
                'source': { type: 'geojson', data: this.citiesFeatureCollection },
                'paint': {
                    'circle-color': '#5bdea2',
                    'circle-radius': 10,
                    'circle-opacity': 0.2
                }
            });

            this.map.addLayer({
                'id': 'cities2',
                'type': 'circle',
                'source': { type: 'geojson', data: this.citiesFeatureCollection },
                'paint': {
                    'circle-color': '#b8ff5a',
                    'circle-radius': 5,
                    'circle-opacity': 0.7
                }
            });

            this.map.on('mouseenter', 'cities', (e) => {
                this.citySelected = true;
                // Change the cursor style as a UI indicator.
                this.map.getCanvas().style.cursor = 'pointer';
                const selectedCity = e.features[0].properties;
                let prov = selectedCity.province;
                if (prov === 'Prince Edward Island') {
                    prov = 'P.E.I.';
                }

                const popupInfo: MapPopupInfo = {
                    provinceId: selectedCity.provinceId,
                    provinceName: prov,
                    cityId: selectedCity.cityId,
                    cityName: selectedCity.city
                };

                const factory = this.resolver.resolveComponentFactory(MapPopupComponent);
                const component = factory.create(this.injector);
                component.instance.popupInfo = popupInfo;
                component.changeDetectorRef.detectChanges();

                // let viewStatsBtn = component.location.nativeElement.querySelector('.btn-statistics');
                // let listener = this.renderer.listen(viewStatsBtn, 'click', (evt) => {console.log('clicked')});

                this.popup.setLngLat(e.features[0].geometry.coordinates)
                    .setHTML(component.location.nativeElement.innerHTML)
                    .addTo(this.map);
            });

            this.map.on('mouseleave', 'cities', () => {
                this.citySelected = false;
                this.map.getCanvas().style.cursor = '';
                // popup.remove();
            });

            this.map.on('click', 'cities', (e) => {
                const cityName = e.features[0].properties.city;
                this.flyToCity(cityName);
                this.popup.remove();
            });

            this.map.on('zoomend', (e) => {
                if (!this.map.isMoving()) {
                    if (this.map.getZoom() < 8) {
                        this.map.setPitch(0);
                    }
                }
            });
        });
    }

    flyToCanada() {
        this.map.fitBounds([[-143.4375, 45.213003555993964], [-49.74609374999999, 67.06743335108298]]);
    }

    flyToProvince(provinceName: string) {
        const center = this.provincesFeatureCollection.features
                            .filter(x => x.properties.province === provinceName)[0]
                            .geometry.coordinates;
        const zoomLevel = this.provincesFeatureCollection.features
                            .filter(x => x.properties.province === provinceName)[0]
                            .properties.zoomLevel;
        this.map.flyTo({
            center: center,
            zoom: zoomLevel,
            bearing: 0,
            speed: 0.7, // make the flying slow
            curve: 1, // change the speed at which it zooms out
            pitch: 0
        });
        // map.fitBounds([[bbox.xMin, bbox.yMin], [bbox.xMax, bbox.yMax]]);
    }

    flyToCity(cityName: string) {
        const center = this.citiesFeatureCollection.features.filter(x => x.properties.city === cityName)[0].geometry.coordinates;
        const zoomLevel = this.citiesFeatureCollection.features.filter(x => x.properties.city === cityName)[0].properties.zoomLevel;
        this.map.flyTo({
            center: center,
            zoom: zoomLevel,
            bearing: 0,
            speed: 0.7, // make the flying slow
            curve: 1, // change the speed at which it zooms out
            pitch: 55
        });
        // map.fitBounds([[bbox.xMin, bbox.yMin], [bbox.xMax, bbox.yMax]]);
    }

    resizeMapForMilliseconds(ms: number) {
        const map = this.map;
        const startTime = (new Date()).getTime();
        const interval = 5;
        (function p() {
            map.resize();
            if (((new Date).getTime() - startTime) <= ms) {
                setTimeout(p, interval);
            }
        })();
    }

    getBoundingBox(data, isInverted) {
        const bounds: any = {};
        let latitude;
        let longitude;
        let firstElement;

        // coordinates[0] is the whole map coords (if we are using an inverted geometry)
        if (isInverted) {
            firstElement = 1;
        } else {
            firstElement = 0;
        }

        const polygons = data.geometry.coordinates;

        if (data.geometry.type === 'Polygon') {
            for (let i = firstElement; i < polygons.length; i++) {
                const polygon = data.geometry.coordinates[i];

                for (let j = 0; j < polygon.length; j++) {
                    longitude = polygon[j][0];
                    latitude = polygon[j][1];
                    bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
                    bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
                    bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
                    bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
                }
            }
        } else if (data.geometry.type === 'MultiPolygon') {
            for (let i = firstElement; i < polygons.length; i++) {
                const polygon = data.geometry.coordinates[i][0];

                for (let j = 0; j < polygon.length; j++) {
                    longitude = polygon[j][0];
                    latitude = polygon[j][1];
                    bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
                    bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
                    bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
                    bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
                }
            }
        }
        return bounds;
    }
}
