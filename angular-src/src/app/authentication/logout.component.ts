/**
 * Created by vw on 2017-08-07.
 */
import{Component} from "@angular/core";
import{AuthenticationService} from "./authentication.service";
import{Router} from "@angular/router";
@Component({
    selector:'app-logout',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <button class="btn btn-danger" (click)="onLogout()">Logout</button>
        </div>
    `
})

export class LogoutComponent{
    constructor(private authService: AuthenticationService, private router:Router){

    }
    onLogout(){
        this.authService.logout();
        this.router.navigate(['/authentication','login']);

    }
}