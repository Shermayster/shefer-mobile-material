/**
 * Created by sherm on 11/22/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {PatientBase} from "../models/pateind.model";
import {Router} from "@angular/router";

export class FamilyData {
  _familyData:PatientBase;
}

@Injectable()
export class DataService {

    constructor(private _httpService: HttpService, public _familyData:FamilyData, private router: Router) { }

    setFamilyData(data:PatientBase) {
      this._familyData._familyData = data;
    }

    getFamilyData() {
      let data = this._familyData._familyData;
      if(data) {
        return data
      } else {
        this.router.navigate(['./enter']);
      }
      return this._familyData._familyData;
    }



}
