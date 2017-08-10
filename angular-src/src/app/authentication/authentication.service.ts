/**
 * Created by vw on 2017-08-09.
 */
 import { User } from './user.model';
 import {Http, Headers,Response} from '@angular/http';
 import {Injectable} from '@angular/core';
 import 'rxjs/RX';
import {Observable} from "rxjs";
 @Injectable()
export class AuthenticationService{
     constructor(private http:Http){}
     signup(user: User){
         const body=JSON.stringify(user);
         const headers=new Headers({'Content-Type':'application/json'});
         return this.http.post('http://localhost:3000/user/signup',body,{headers:headers})
             .map((response: Response)=>response.json())
             .catch((error: Response)=>Observable.throw(error.json()));

     }
     login(user:User){
         const body=JSON.stringify(user);
         const headers=new Headers({'Content-Type':'application/json'});
         return this.http.post('http://localhost:3000/user/login',body,{headers:headers})
             .map((response: Response)=>response.json())
             .catch((error: Response)=>Observable.throw(error.json()));
     }

     logout(){
         localStorage.clear();
     }
}