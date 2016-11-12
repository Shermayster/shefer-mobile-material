import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
 @Input() signin:boolean;
  @Output() enterTo = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  enter() {
    this.enterTo.emit(true);
  }

}
