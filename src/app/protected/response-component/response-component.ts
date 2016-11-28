/**
 * Created by sherm on 11/26/2016.
 */
import { Component, OnInit } from '@angular/core';
import {PatientActivity} from "../../models/pateind.model";
import {ProgramService} from "../../services/program.service";
import {Router} from "@angular/router";

@Component({
    selector: 'response-component',
    templateUrl: 'response-component.html'
})
export class ResponseComponent implements OnInit {

    activity: PatientActivity;
    constructor(private programService: ProgramService, private router:Router) { }

    ngOnInit() {
      this.activity = this.programService.getActivity();
    }

  goToStart() {
      this.router.navigate(['protected'])
  }

}
