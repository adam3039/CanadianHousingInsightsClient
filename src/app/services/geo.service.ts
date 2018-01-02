import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Province } from '../models/geo/province';
import { City } from '../models/geo/city';
import { FeatureCollection, Feature } from 'geojson';

@Injectable()
export class GeoService {

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getProvinces(): Observable<Province[]> {
        return this.http.get<Province[]>(this.baseUrl + 'api/geo/provinces');
    }

    getCitiesByProvinceId(provinceId: number): Observable<City[]> {
        return this.http.get<City[]>(this.baseUrl + 'api/geo/cities?provinceId=' + provinceId);
    }

    getCities(): Observable<City[]> {
        return this.http.get<City[]>(this.baseUrl + 'api/geo/cities');
    }

    getCanadaBoundaries(): Observable<Feature<any>> {
        return this.http.get<Feature<any>>(this.baseUrl + 'api/geo/boundaries/national');
    }

    getProvinceBoundaries(): Observable<Feature<any>> {
        return this.http.get<Feature<any>>(this.baseUrl + 'api/geo/boundaries/provincial');
    }

    getProvinceAreas(): Observable<Feature<any>> {
        return this.http.get<Feature<any>>(this.baseUrl + 'api/geo/areas/provincial');
    }

    getCityAreas(): Observable<Feature<any>> {
        return this.http.get<Feature<any>>(this.baseUrl + 'api/geo/areas/local');
    }
}
