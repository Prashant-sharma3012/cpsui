import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.admin.html',
  styleUrls: ['./app.admin.css']
})
export class Admin {

constructor(private router: Router) {}

    addItem(){
        this.router.navigate(['/item'])
    }

    addVendor(){
        this.router.navigate(['/vendor'])
    }

    createQuote(){
        this.router.navigate(['/quote'])
    }

}


