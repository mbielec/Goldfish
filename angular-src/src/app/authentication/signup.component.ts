/**
 * Created by vw on 2017-08-07.
 */
import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Http, Headers,Response} from '@angular/http';
import {AuthenticationService} from "./authentication.service";
import {User} from "./user.model";
import {Router} from "@angular/router";


@Component({selector:'app-signup',
templateUrl:'./signup.component.html'})

export class SignupComponent implements OnInit{
    uniqueEmail: boolean;
    signupForm: FormGroup;
    constructor(private authService: AuthenticationService, private router: Router){

    }

    onSubmit(){
        const user=new User(this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.firstName,
            this.signupForm.value.lastName
        );

        this.authService.signup(user)
            .subscribe(
                data=>{console.log(data);
                this.router.navigateByUrl('/authentication/login');},
                error=>console.error(error)
            );
    }
    unique(email:string){
        var unique: boolean;
        this.authService.checkUnique(email)
            .subscribe(
                data=>{
                this.uniqueEmail=data.unique;}
            );

    }

    ngOnInit(){
        this.signupForm=new FormGroup({
            firstName: new FormControl(null,[Validators.required]),
            lastName: new FormControl(null,Validators.required),
            email: new FormControl("your uwo email",[Validators.required,]),
            password: new FormControl(null,[Validators.required,Validators.minLength(5)])
        })
    }
}