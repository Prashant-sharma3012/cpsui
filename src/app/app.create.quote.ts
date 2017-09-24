import { Component , OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.create.quote.html',
  styleUrls: ['./app.create.quote.css']
})
export class CreateQuote implements OnInit {

form: FormGroup; 
elem:FormArray;

constructor(private formBuilder: FormBuilder,private router: Router) {}
    ngOnInit() { 
         this.form = new FormGroup({
        'row': this.formBuilder.array([
                this.initLink(),
            ])
        });

        this.addLink();
    }

    initLink() {
        return this.formBuilder.group({
            item: ['', Validators.required],
            category: ['', Validators.required],
            subcategory: ['', Validators.required],
            qty: ['', Validators.required],
            cost: ['', Validators.required],
            vendor: ['', Validators.required]
        });
    }
    addLink() {
        const control = < FormArray > this.form.controls['row'];
        control.push(this.initLink());
    }
    removeLink(i: number) {
        const control = < FormArray > this.form.controls['row'];
        control.removeAt(i);
    }

    review(){
        this.router.navigate(['/review'])
    }

}

