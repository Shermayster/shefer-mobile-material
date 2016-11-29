/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {PatientBase, ActivitiesProgram, PatientActivity} from "../../models/pateind.model";
import {DataService} from "../../services/data.service";
import {HttpService} from "../../services/http.service";
import {ProgramService} from "../../services/program.service";

@Component({
    selector: 'app-protected',
    templateUrl: 'protected.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {
    currentWeek: number = 1;
    totalWeeks: number = 3;
    tip: string = "להקפיד על סדר יום קבוע ולשלב את תוכנית הפעילות ל'משבצת' זמן מתאימה.";
    patient: PatientBase;
    activeProgram: ActivitiesProgram;
    foodActivities: PatientActivity[];
    clothesActivity: PatientActivity[];
    independenceActivity: PatientActivity[];
    creativityActivity: PatientActivity[];
    outdoorActivity: PatientActivity[];
    finishedActivities: PatientActivity[];
    progressBar: number;

    constructor(private dataService:DataService, private httpService:HttpService, private router: Router, private programService: ProgramService ) { }

    ngOnInit() {
      this.httpService.getTips()
        .subscribe(tip => this.tip = tip);
      this.showProgram();

    }
    navToProg(group) {
      this.setActivities(group);
      this.router.navigate(['./program']);
    }

    findActiveProgram(family: PatientBase):ActivitiesProgram {
      return family.program.find(program => program.status === true);
    }


    setActivities(group) {
      let activitiesGroup:PatientActivity[];
      switch(group) {
          case 'ארוחה':
            activitiesGroup = this.foodActivities;
            break;
          case 'לבוש':
            activitiesGroup = this.clothesActivity;
            break;
          case 'עצמאות בבית':
            activitiesGroup = this.independenceActivity;
            break;
          case 'יצירה':
            activitiesGroup = this.creativityActivity;
            break;
          case 'גינה ציבורית':
            activitiesGroup = this.outdoorActivity;
            break;
      }
      this.programService.setActivitiesGroup(activitiesGroup);
    }

    filterActivity(activityName) {
      return this.activeProgram.patientActivityList.filter(activity => activity.activityType.includes(activityName) && activity.activityRestponce !== 'הצלחנו');
    }

    calcProgress() {
        return (this.finishedActivities.length/this.activeProgram.patientActivityList.length)*100;

    }

  startNewWeek() {
      if(this.activeProgram.currentWeek < this.activeProgram.duration){
        this.activeProgram.currentWeek ++;
        this.activeProgram.patientActivityList.forEach(activity => {
          activity.activityRestponce = '';
        });

        this.httpService.updateProgram(this.activeProgram).subscribe(
          res => this.showProgram()
        );
      }

  }

  showProgram() {
    this.patient = this.dataService.getFamilyData();
    this.activeProgram = this.findActiveProgram(this.patient);
    this.foodActivities = this.filterActivity('ארוחה');
    this.clothesActivity = this.filterActivity('לבוש');
    this.independenceActivity = this.filterActivity('עצמאות בבית');
    this.creativityActivity = this.filterActivity('יצירה');
    this.outdoorActivity = this.filterActivity( 'גינה ציבורית');
    this.finishedActivities = this.activeProgram.patientActivityList.filter(activity => activity.activityRestponce === 'הצלחנו');
    this.currentWeek = this.activeProgram.currentWeek;
    this.totalWeeks = this.activeProgram.duration;
    this.progressBar = this.calcProgress();
  }


}
