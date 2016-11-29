/**
 * Created by sherm on 11/13/2016.
 */
import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../../services/program.service";
import {PatientActivity, ActivitiesResponse, PatientBase} from "../../models/pateind.model";
import {Router} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    family:PatientBase;
    showButtons:boolean = false;
    imgUrl:string;
    currentGroup:PatientActivity[];
    homePickUrl = "../assets/pics/category-pics/home.png";
    cookPickUrl = "../assets/pics/category-pics/cook11.png";
    creativityPickUrl = "../assets/pics/category-pics/creativity.png";
    outdoorPickUrl = "../assets/pics/category-pics/gina_FINAL.png";
    closesPickUrl = "../assets/pics/category-pics/clothes.png";
    activity: PatientActivity;

  constructor(private programService: ProgramService, private router:Router, private httpService:HttpService, private dataService:DataService) { }
    ngOnInit() {
      this.activity = this.programService.getActivity();
      this.family = this.dataService.getFamilyData();
      this.getImgUrl();
    }

  getImgUrl() {
    switch (this.activity.activityType) {
      case 'ארוחה':
        this.imgUrl = this.cookPickUrl;
        break;
      case 'לבוש':
        this.imgUrl= this.closesPickUrl;
        break;
      case 'עצמאות בבית':
        this.imgUrl = this.homePickUrl;
        break;
      case 'יצירה':
        this.imgUrl = this.creativityPickUrl;
        break;
      case 'גינה ציבורית':
        this.imgUrl = this.outdoorPickUrl;
        break;
      default:
        this.imgUrl = this.cookPickUrl;
    }
  }

  showButtonsGroup() {
      this.showButtons = true;
  }

  addResponse(response) {
    this.activity.activityRestponce = response;

    let feedback = new ActivitiesResponse();
    feedback.programId = this.activity.programId;
      feedback.activityName = this.activity.activityNameParent;
      feedback.activityResponse = response;
      feedback.week = this.family.program[0].currentWeek;
    this.activity.activityFeedback = response;
      this.httpService.updateResponse(feedback).subscribe(
        res => {
          this.router.navigate(['response']);
        }

      );

    this.httpService.updateActivity(this.activity).subscribe(
      res => console.log('activity updated')
    );
  }

}
