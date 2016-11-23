/**
 * Created by sherm on 11/22/2016.
 */
import {Injectable} from '@angular/core';
import {PatientActivity} from "../models/pateind.model";
export class ActivitiesGroup {
  activitiesGroup: PatientActivity[];
}

export class Activity {
  activity:PatientActivity;
}

@Injectable()
export class ProgramService {

  constructor(private _activitiesGroup:ActivitiesGroup, private _activity:Activity) { }

  setActivitiesGroup(activities: PatientActivity[]) {
      this._activitiesGroup.activitiesGroup = activities;
  }

  getActivitiesGroup(): PatientActivity[] {
    return this._activitiesGroup.activitiesGroup;
  }

  setActivity(activity: PatientActivity) {
    this._activity.activity = activity;
  }

  getActivity(): PatientActivity {
    return this._activity.activity;
  }

}
