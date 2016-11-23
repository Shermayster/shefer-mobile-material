/**
 * Created by sherm on 11/13/2016.
 */
import { Component, OnInit } from '@angular/core';
import {ProgramService} from "../../services/program.service";
import {PatientActivity} from "../../models/pateind.model";

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})
export class TaskComponent implements OnInit {
    constructor(private programService: ProgramService) { }

    activity: PatientActivity;
    ngOnInit() {
      this.activity = this.programService.getActivity();
    }

}
