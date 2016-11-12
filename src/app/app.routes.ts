import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ProgramComponent} from "./program.component/program.component";
import {ModuleWithProviders} from "@angular/core";
/**
 * Created by sherm on 11/12/2016.
 */



const  appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'program', component: ProgramComponent}
]

export const appRoutingProviders: any[] = [

];
export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
