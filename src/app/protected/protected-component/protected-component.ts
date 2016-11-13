/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-protected',
    templateUrl: 'protected.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    navToProg() {
      this.router.navigate(['./program']);
    }
}
