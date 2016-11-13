import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
 @Input() signin:boolean;
  @Output() enterTo = new EventEmitter();
  constructor( private router: Router) { }

  ngOnInit() {
  }

  enter() {
    this.router.navigate(['./protected'])
  }

}
