/**
 * Created by sherm on 11/22/2016.
 */

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PatientActivity, ActivitiesResponse} from "../models/pateind.model";

@Injectable()
export class HttpService {

    patientApi = 'http://localhost:53560/api/Family?password=321321321';
   // patientApi = 'http://projects.telem-hit.net/2016/May-men_HofitPavelOrit/Server/api/Family?password=321321321';
    //patientApi = 'http://sherm84-001-site1.htempurl.com/api/Family?password=321321321';
    feedBackApi= 'http://localhost:53560/api/feedback';
    updateActivityApi = 'http://localhost:53560/api/updateActivity';
    tipApi = '../mock/tips.json';
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

  updateResponse(activityFeedback:ActivitiesResponse) {
    return this.http.post(this.feedBackApi, activityFeedback);
  }

  updateActivity(activity: PatientActivity) {
      return this.http.put(this.updateActivityApi, activity);
  }
}
