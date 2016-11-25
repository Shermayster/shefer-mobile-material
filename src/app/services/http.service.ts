/**
 * Created by sherm on 11/22/2016.
 */

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

    //patientApi = 'http://localhost:53560/api/Family?password=321321321';
    patientApi = 'http://localhost:53560/api/Family?password=321321321';
    tipApi = 'http://localhost:4200/app/mock/tips.json';
    constructor(private http:Http) { }

   getFamily() {
      return this.http.get(this.patientApi)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getTips()  {
    return this.http.get(this.tipApi)
      .map(
        res => {
          let tips = res.json();
          let tip;
          tip = tips[Math.floor(Math.random()*tips.length)]
          console.log('tip ', tip.tip);
          return tip.tip || '';
        }
      )
      .catch(this.handleError);
  }
}
