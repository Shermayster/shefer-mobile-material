/**
 * Created by sherm on 11/22/2016.
 */
import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {PatientBase} from "../models/pateind.model";

export class FamilyData {
  _familyData:PatientBase;
}

@Injectable()
export class DataService {

    constructor(private _httpService: HttpService, public _familyData:FamilyData) { }

    setFamilyData(data:PatientBase) {
      this._familyData._familyData = data;
    }

    getFamilyData() {
      return this._familyData._familyData;
    }

}
