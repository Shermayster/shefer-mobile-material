import {Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/components/common/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
  selectedValues: string[] = ['val1','val2'];
  signin:boolean = false;
  tip:string;
  message: string;
  ngOnInit() {
    this.tip = "בדיקה";
    this.message = "בדיקה"
  }

  enterTo() {
    this.signin = true;
  }
}
