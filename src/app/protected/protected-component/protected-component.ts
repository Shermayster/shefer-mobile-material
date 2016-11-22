/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {PatientBase, ActivitiesProgram} from "../../models/pateind.model";
import {DataService} from "../../services/data.service";

@Component({
    selector: 'app-protected',
    templateUrl: 'protected.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {
    tipData:[''];
    tip: string = 'לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית הועניב היושבב שערש שמחויט - שלושע ותלברו חשלו שעותלשך וחאית נובש ערששף. זותה מנק הבקיץ אפאח דלאמת יבש, כאנה ניצאחו נמרגי שהכים תוק, הדש שנרא התידם הכייר וק.';
    patient: PatientBase;
    activeProgram: ActivitiesProgram;
    constructor(private dataService:DataService, private router: Router) { }

    ngOnInit() {
      this.patient = this.dataService.getFamilyData();
      this.activeProgram = this.findActiveProgram(this.patient);
    }
    navToProg() {
      this.router.navigate(['./program']);
    }

    findActiveProgram(family: PatientBase):ActivitiesProgram {
      return family.program.filter(program => program.status === true)[0];
    }
}
