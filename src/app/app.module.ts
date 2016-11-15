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
import {ProgramComponent} from "./protected/program.component/program.component";
import {ProtectedComponent} from "./protected/protected-component/protected-component";
import {FieldsetModule} from "primeng/components/fieldset/fieldset";
import {TaskComponent} from "./protected/task-component/task.component";
import {AccordionModule} from "primeng/components/accordion/accordion";


@NgModule({
  declarations: [
    AppComponent,
    ProgramComponent,
    SignInComponent,
    ProtectedComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TabMenuModule,
    CheckboxModule,
    PanelModule,
    TabViewModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    FieldsetModule,
    AccordionModule,
    ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
