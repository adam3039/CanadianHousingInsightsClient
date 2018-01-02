import { Component, OnInit, Input, ViewEncapsulation, HostListener, NgZone, Renderer2 } from '@angular/core';
import { MapService } from '../../services/map.service';
import { Map } from 'mapbox-gl';
import { Router } from '@angular/router';

@Component({
    selector: 'app-map',
    templateUrl: './map-area.component.html',
    styleUrls: ['./map-area.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
    constructor(private mapService: MapService,
        private zone: NgZone,
        private router: Router,
        private renderer: Renderer2) {
        window['angularComponentRef'] = {
            zone: this.zone,
            componentFn: () => this.closePopup(),
            viewStatsBtnFn: (provinceId, cityId) => this.onViewStatsClick(provinceId, cityId),
            component: this
        };
        mapService.renderer = renderer;
    }

    fullScreen = false;

    updateToggled(sidePanelActive: boolean) {
        this.mapService.resizeMapForMilliseconds(500);
        this.fullScreen = !sidePanelActive;
    }

    closePopup() {
        this.mapService.popup.remove();
    }

    onViewStatsClick(provinceId, cityId) {
        this.router.navigate(['/stats'], { queryParams: { provinceId, cityId } });
    }

    ngOnInit() {
        const map = new Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v9',
            center: [-98.93, 56.43],
            zoom: 2,
            logoPosition: 'bottom-right'
        });

        this.mapService.map = map;

        this.mapService.initializeMap();
    }
}
