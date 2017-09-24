import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.login.html',
  styleUrls: ['./app.login.css']
})
export class AppLogin {
    email:string;
    password:String;


    constructor(private router: Router) {
    };

    login(){
        this.router.navigate(['/home'])
    }
}
