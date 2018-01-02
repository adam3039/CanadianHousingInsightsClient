import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ChartData } from '../models/stats/chart-data';
import { Stat } from '../models/stats/stat';

@Injectable()
export class StatsService {

    public chartModalClosedObservable = new Subject();

    constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getNationalStats(): Observable<Stat[]> {
        return this.http.get<Stat[]>(this.baseUrl + 'api/stats/national');
    }

    getProvincialStats(provinceId: number): Observable<Stat[]> {
        return this.http.get<Stat[]>(this.baseUrl + 'api/stats/provincial?provinceId=' + provinceId);
    }

    getLocalStats(cityId: number): Observable<Stat[]> {
        return this.http.get<Stat[]>(this.baseUrl + 'api/stats/local?cityId=' + cityId);
    }

    getNationalChartData(statId: number): Observable<ChartData> {
        return this.http.get<ChartData>(this.baseUrl + 'api/chart/national?statId=' + statId);
    }

    getProvincialChartData(statId: number, provinceId: number): Observable<ChartData> {
        return this.http.get<ChartData>(this.baseUrl + 'api/chart/provincial?provinceId=' + provinceId + '&statId=' + statId);
    }

    getLocalChartData(statId: number, cityId: number): Observable<ChartData> {
        return this.http.get<ChartData>(this.baseUrl + 'api/chart/local?cityId=' + cityId + '&statId=' + statId);
    }

    chartModalClosed() {
        this.chartModalClosedObservable.next();
    }
}
