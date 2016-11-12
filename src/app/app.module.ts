import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {TabMenuModule} from "primeng/primeng";
import {RouterModule} from "@angular/router";
import {CheckboxModule} from "primeng/components/checkbox/checkbox";
import {PanelModule} from "primeng/components/panel/panel";
import {TabViewModule} from "primeng/components/tabview/tabview";
import {InputTextModule} from "primeng/components/inputtext/inputtext";
import {ButtonModule} from "primeng/components/button/button";
import {PasswordModule} from "primeng/components/password/password";
import {ROUTES} from "./app.routes";
import {ProgramComponent} from "./program.component/program.component";


@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    TabMenuModule,
    CheckboxModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    ROUTES,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
