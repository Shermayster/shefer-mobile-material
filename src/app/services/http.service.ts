/**
 * Created by sherm on 11/22/2016.
 */

import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {PatientActivity, ActivitiesResponse, ActivitiesProgram} from "../models/pateind.model";
import {Program} from "webdriver-manager/built/lib/cli";

@Injectable()
export class HttpService {

   //apiPath = 'http://localhost:53560/api/';
    apiPath = 'http://projects.telem-hit.net/2016/May-men_HofitPavelOrit/Server/api/';
    //apiPath = 'http://sherm84-001-site1.htempurl.com/api/';
    patientApi = this.apiPath + 'Family?password=';
    feedBackApi= this.apiPath + 'feedback';
    updateActivityApi = this.apiPath + 'updateActivity';
    tipApi = 'assets/mock/tips.json';
    updateProgramApi = this.apiPath + 'Program';
    constructor(private http:Http) { }

   getFamily(pass:string) {
      return this.http.get(this.patientApi + pass)
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

  updateProgram(program: ActivitiesProgram) {
      return this.http.put(this.updateProgramApi+'/'+ program.programID, program)
  }
}
