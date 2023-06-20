import { Router } from '@angular/router';
import { RegService } from './../reg.service';
import { Component, OnInit } from '@angular/core';
import { UserInfo } from './signin.interface';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  form : any = {
    useremail: null,
    userpassword : null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles : any[] = [];

  userList! : UserInfo[];
  user! : UserInfo;

  constructor(private registrationService : RegService, private router : Router){}

  ngOnInit(): void {
    if (this.registrationService.isLoggedIn()) {
      this.isLoggedIn = true;
    }
    this.userList = [];
  }

  onSubmit() : void {
    const useremail = this.form.useremail;
    const userpassword = this.form.userpassword;

    this.registrationService.login(useremail, userpassword).subscribe({
      next : (data : any) => {
        console.log("Role---- -- -- ", data)
        this.userList = data;
        const found = this.userList.find(element => {
        if(element.useremail === useremail && element.userpassword === userpassword)  {
          this.registrationService.saveUser(element);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          // this.reloadPage();
          this.router.navigateByUrl('/child')
          return element;
        }
        else{
          this.isLoginFailed = true;
          return null;
        }
        });
      },
      error : (err: { error : { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage() : void {
    window.location.reload();
  }

}
