import { Component, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { GeoService } from '../../../services/geo.service';
import { StatsService } from '../../../services/stats.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Stat } from '../../../models/stats/stat';
import { Observable } from 'rxjs/Observable';
import { MapService } from '../../../services/map.service';

@Component({
    selector: 'app-stats',
    templateUrl: './stats.component.html',
    styleUrls: ['./stats.component.less'],
    encapsulation: ViewEncapsulation.None
})
export class StatsComponent {
    nationalActive = true;

    provinces: SelectItem[];
    selectedProvince: string;
    provincialActive = false;

    cities: SelectItem[];
    selectedCity: string;
    localActive = false;

    statOptions: SelectItem[];
    childStatOptions: SelectItem[];
    stats: Stat[];
    childStats: Stat[];
    selectedStat: string;
    selectedChildStat: string;
    statActive = false;
    childStatActive = false;
    showChildStat = false;
    private scope = 'national';
    statsLoaded = false;

    private provinceId: number;
    private cityId: number;

    constructor(private geoService: GeoService,
                private statsService: StatsService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private mapService: MapService) {

        // Grab provinces and map them to select list arrays for dropdowns
        this.geoService.getProvinces()
            .map(response => response.map(province => ({ label: province.name, value: province.id })))
            .subscribe(provinces => {
                this.provinces = provinces;

                // Grab query params for initial selections
                this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
                    const provinceId = queryParams['provinceId'];
                    const cityId = queryParams['cityId'];

                    if (provinceId !== undefined) {
                        this.selectedProvince = provinceId;
                        this.onProvinceChange();
                        if (cityId !== undefined) {
                            this.selectedCity = cityId;
                            this.geoService.getCitiesByProvinceId(provinceId)
                                .map(response => response.map(city => ({ label: city.name, value: city.id })))
                                .subscribe(cities => {
                                    this.cities = cities;
                                    this.onCityChange();
                                });
                        }
                    }
                });
            });

        this.getNationalStats();

        this.statsService.chartModalClosedObservable.subscribe(() => this.onChartModalClose());
    }

    onNationalChange() {
        this.scope = 'national';
        if (this.nationalActive) {

            this.mapService.flyToCanada();

            this.selectedProvince = '';
            this.selectedCity = '';
            this.provincialActive = false;
            this.localActive = false;
            this.selectedStat = '';
            this.statActive = false;
            this.selectedChildStat = '';
            this.childStatActive = false;
            this.statsLoaded = false;
            this.getNationalStats();
        }
        this.childStatActive = false;
        this.showChildStat = false;
        this.selectedChildStat = '';
    }

    onProvinceChange() {
        this.scope = 'provincial';
        const provinceId = Number(this.selectedProvince);
        const province = this.provinces.find(m => m.value === provinceId);
        if (province !== undefined) {
            this.mapService.flyToProvince(province.label);
        }
        this.provinceId = provinceId;
        this.geoService.getCitiesByProvinceId(provinceId)
            .map(response => response.map(city => ({ label: city.name, value: city.id })))
            .subscribe(result => {
                this.cities = result;
            });
        this.statsLoaded = false;
        this.getProvincialStats(provinceId);
        this.provincialActive = true;
        this.nationalActive = false;
        this.localActive = false;
        this.statActive = false;
        this.showChildStat = false;
        this.selectedStat = '';
    }

    onCityChange() {
        this.scope = 'local';
        const cityId = Number(this.selectedCity);

        // Fly map to city
        const city = this.cities.find(m => m.value === cityId);
        if (city !== undefined) {
            this.mapService.flyToCity(city.label);
        }

        this.cityId = cityId;
        this.statsLoaded = false;

        this.getLocalStats(cityId);

        this.statActive = false;
        this.localActive = true;
        this.showChildStat = false;
    }

    onPrimaryStatChange() {
        const statId = Number(this.selectedStat);
        this.statActive = true;

        // if there are child stats, map them to substats dropdown
        if (this.scope === 'national') {
            this.getNationalSubStats(statId);
        }
        if (this.scope === 'provincial') {
            // move this line into your substat implementation like national when required
            this.router
                .navigate([{ outlets: { modal: 'chart' } }],
                { queryParams: {
                    scope: this.scope,
                    statId: Number(this.selectedStat),
                    provinceId: this.provinceId,
                    cityId: this.cityId
                }});
        }
        if (this.scope === 'local') {
            // move this line into your substat implementation like national when required
            this.router
                .navigate([{ outlets: { modal: 'chart' } }],
                { queryParams: {
                    scope: this.scope,
                    statId: Number(this.selectedStat),
                    provinceId: this.provinceId,
                    cityId: this.cityId
                }});
        }
    }

    getNationalSubStats(parentId: number) {
        this.statsService.getNationalStats()
            .map(response => response.map(stat => ({ label: stat.name, value: stat.id, parentId: stat.parentId })))
            .subscribe(result => {
                this.childStatOptions = result.filter(m => m.parentId === parentId);
                this.statsLoaded = true;
                if (this.childStatOptions === undefined || this.childStatOptions.length === 0) {
                    this.showChildStat = false;
                    this.router
                    .navigate([{ outlets: { modal: 'chart' } }],
                    { queryParams: {
                        scope: this.scope,
                        statId: Number(this.selectedStat),
                        provinceId: this.provinceId,
                        cityId: this.cityId
                    }});
                } else {
                    this.showChildStat = true;
                }
            });
    }

    // currently only need national child stats, implement provincial and local here as required
    getProvincialSubStats(parentId: number, provinceId: number) {
        return this.statsService.getProvincialStats(provinceId)
            .map(response => response.map(stat => ({ label: stat.name, value: stat.id, parentId: stat.parentId })))
            .subscribe(result => {
                this.statOptions = result.filter(m => m.parentId === parentId);
                this.statsLoaded = true;
            });
    }
    getLocalSubStats(ParentId: number) { }

    onChildStatChange() {
        this.childStatActive = true;
        this.router
        .navigate([{ outlets: { modal: 'chart' } }],
        { queryParams: {
            scope: this.scope,
            statId: this.selectedChildStat,
            provinceId: this.provinceId,
            cityId: this.cityId
        }});
    }

    getNationalStats() {
        this.statsService.getNationalStats()
            .map(response => response.map(stat => ({ label: stat.name, value: stat.id, parentId: stat.parentId })))
            .subscribe(result => {
                this.statOptions = result.filter(m => m.label != null && m.parentId == null);
                this.statsLoaded = true;
            });
    }

    getProvincialStats(provinceId: number) {
        this.statsService.getProvincialStats(provinceId)
            .map(response => response.map(stat => ({ label: stat.name, value: stat.id })))
            .subscribe(result => {
                this.statOptions = result.filter(m => m.label != null);
                this.statsLoaded = true;
            });
    }

    getLocalStats(cityId: number) {
        this.statsService.getLocalStats(cityId)
            .map(response => response.map(stat => ({ label: stat.name, value: stat.id })))
            .subscribe(result => {
                this.statOptions = result.filter(m => m.label != null);
                this.statsLoaded = true;
            });
    }

    onChartModalClose() {
        if (this.showChildStat) {
            this.childStatActive = false;
            this.selectedChildStat = '';
        } else {
            this.selectedStat = '';
            this.statActive = false;
            this.childStatActive = false;
            this.selectedChildStat = '';
        }
    }
}

