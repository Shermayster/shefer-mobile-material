/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {PatientActivity} from "../../models/pateind.model";
import {ProgramService} from "../../services/program.service";

@Component({
    selector: 'program',
    templateUrl: 'program.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProgramComponent implements OnInit {
  currentGroup:PatientActivity[];

  header: string = 'test';
    content:string =  `הורים שימו לב ,חשוב  לשמור על  סדר יום קבוע ולתת לילד תפקידים במהלך ביצוע המשימות השונות.
כך הילד מפנים תחושת מסוגלות, יכולות קוגניטיביות ורוכש אסטרטגיות יעילות להתארגנות והתנהלות בחיי היום יום.
`
  tasks:any[] = [ 'test1', 'test2', 'test3'];
  homePickUrl = "assets/pics/category-pics/home.png";
  cookPickUrl = "assets/pics/category-pics/cook11.png";
  creativityPickUrl = "assets/pics/category-pics/creativity.png";
  outdoorPickUrl = "assets/pics/category-pics/gina_FINAL.png";
  closesPickUrl = "assets/pics/category-pics/clothes.png";
  imgUrl = this.cookPickUrl;
  constructor(private router: Router, private programService: ProgramService ) {};


    ngOnInit() {
      this.currentGroup = this.programService.getActivitiesGroup();
      this.getImgUrl();
    }

    getImgUrl() {
      switch (this.currentGroup[0].activityType.trim()) {
        case 'ארוחה':
          this.imgUrl = this.cookPickUrl;
          break;
        case 'לבוש':
          this.imgUrl = this.closesPickUrl;
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

  doActivity(activity: PatientActivity) {
    this.programService.setActivity(activity);
    this.router.navigate(['task']);
  }

}
