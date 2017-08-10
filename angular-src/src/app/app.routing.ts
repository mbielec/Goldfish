/**
 * Created by vw on 2017-08-07.
 */
import{ Routes, RouterModule} from '@angular/router';
import{AuthenticationComponent} from './authentication/authentication.component';
import{AUTH_ROUTES} from "./authentication/authentication.routing"
import {LogoutComponent} from "./authentication/logout.component";

const APP_ROUTES: Routes=[
    {path:'',redirectTo:'/authentication',pathMatch:'full'},
    {path:'authentication',component:AuthenticationComponent, children: AUTH_ROUTES},
    {path:'logout',component:LogoutComponent}
];
export const routing= RouterModule.forRoot(APP_ROUTES);