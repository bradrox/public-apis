import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PublicApi } from '../model/api';

const SERVER = 'http://localhost';

@Injectable()
export class PublicApiService {

  constructor(private http: Http) {
  }

  searchPublicApis(start, end): Promise<PublicApi[]> {
    return this.getAllPublicApis();
  }

  getAllPublicApis(): Promise<PublicApi[]> {
    console.log( 'Fetching public apis' );
    return this.http
        .get(SERVER + '/v1/public-apis')
        .toPromise()
        .then(response => response.json().entries as PublicApi [])
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERROR OCCURRED TALKING TO SERVER' + error);
    return Promise.reject(error.message || error);
  }
}
