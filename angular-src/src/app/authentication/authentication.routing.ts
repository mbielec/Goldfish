/**
 * Created by vw on 2017-08-07.
 */
import { Routes } from "@angular/router";

import {SignupComponent} from "./signup.component";
import {LoginComponent} from "./login.component";

export const AUTH_ROUTES: Routes=[
    {path:'',redirectTo:'signup', pathMatch:'full'},
    {path:'signup',component:SignupComponent},
    {path:'login',component:LoginComponent}
]