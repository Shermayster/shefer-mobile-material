import {Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";
import {HttpService} from "../services/http.service";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  @Input() signin:boolean;
  @Output() enterTo = new EventEmitter();
  constructor( private router: Router, private httpService:HttpService, private dataService:DataService) { }

  ngOnInit() {
  }

  submit(pass:string) {
    this.httpService.getFamily(pass)
      .subscribe(data => {
        this.dataService.setFamilyData(data);
        this.router.navigate(['./protected'])
      },
      error=> {
        //todo add error handling
      }
      )
  }

}
