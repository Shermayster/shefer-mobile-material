import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ProgramComponent} from "./protected/program.component/program.component";
import {ModuleWithProviders} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {ProtectedComponent} from "./protected/protected-component/protected-component";
import {TaskComponent} from "./protected/task-component/task.component";
/**
 * Created by sherm on 11/12/2016.
 */



const  appRoutes: Routes = [
  {path: 'enter', component: SignInComponent},
  {path: 'protected', component: ProtectedComponent},
  {path: 'task', component: TaskComponent},
  { path: '', redirectTo:'/enter', pathMatch: 'full'},
  {path: 'program', component: ProgramComponent}
]

export const appRoutingProviders: any[] = [

];
export const ROUTES: ModuleWithProviders = RouterModule.forRoot(appRoutes);
