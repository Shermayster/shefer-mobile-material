/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'program',
    templateUrl: 'program.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProgramComponent implements OnInit {
    header: string = 'test';
    content:string =  `הורים שימו לב ,חשוב  לשמור על  סדר יום קבוע ולתת לילד תפקידים במהלך ביצוע המשימות השונות. 
כך הילד מפנים תחושת מסוגלות, יכולות קוגניטיביות ורוכש אסטרטגיות יעילות להתארגנות והתנהלות בחיי היום יום.
`
  tasks:any[] = [ 'test1', 'test2', 'test3']
  constructor(private router: Router) {};

    ngOnInit() { }

  doTask(taskName) {
    this.router.navigate(['task']);
  }

}
