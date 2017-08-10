/**
 * Created by vw on 2017-08-06.
 */
import{Component, Input, Output, EventEmitter, OnInit} from "@angular/core";
import{FormGroup, FormControl, Validators} from "@angular/forms"
import{User} from "./user.model";
import{AuthenticationService} from "./authentication.service";
import{Router} from "@angular/router";
@Component({
  selector:"app-login",
  templateUrl:"./login.component.html"
})

export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  constructor(private authService: AuthenticationService, private router:Router){}
  onSubmit()
  {
    const user=new User(this.loginForm.value.email,this.loginForm.value.password);
    this.authService.login(user).subscribe(
        data=>{
          localStorage.setItem('token',data.token);
          localStorage.setItem('userId',data.userId);
          this.router.navigateByUrl('/');
        },
        error=>console.error(error)
    );
    this.loginForm.reset();
  }

  ngOnInit(){
    this.loginForm=new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)

    });
  }

}
