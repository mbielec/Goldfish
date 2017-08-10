/**
 * Created by vw on 2017-08-06.
 */
export class User{
  public email: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  constructor(
    email: string, password:string,firstname?: string,lastname?: string
  ){
    this.email=email;
    this.password=password;
    this.firstName=firstname;
    this.lastName=lastname;
  };

}
