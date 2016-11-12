/**
 * Created by sherm on 11/12/2016.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-protected',
    templateUrl: 'protected.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ProtectedComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
