import { Component , OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.quotes.html',
  styleUrls: ['./app.quotes.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Quotes implements OnInit {

constructor(private router: Router) {}
    ngOnInit() { 
    }

    createProj(){
        this.router.navigate(['/project'])
    }
}


