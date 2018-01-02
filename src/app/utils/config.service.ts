import { Inject, Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

    _apiURI: string;

    constructor( @Inject('BASE_URL') private baseUrl: string) {
        this._apiURI = this.baseUrl + '/api';
    }

    getApiURI() {
        return this._apiURI;
    }
}
