import { Component , OnInit,ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.addvendor.html',
  styleUrls: ['./app.addvendor.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddVendor implements OnInit {

form: FormGroup; 
attr:FormArray;

constructor(private formBuilder: FormBuilder,private router: Router) {}
    ngOnInit() { 
         this.form = new FormGroup({
        'vendor1': new FormControl('', [
            Validators.required,
            Validators.minLength(5)]),
        'Category1': new FormControl('',[
            Validators.required,
            Validators.minLength(10)]),
        'SubCategory1': new FormControl('', [
            Validators.required]),
        'Description1': new FormControl('', [
            Validators.required]),
        'detl1': new FormControl('', [
            Validators.required]),
        'attributes': this.formBuilder.array([
                this.initLink(),
            ])
        });

        this.addLink();
    }

    initLink() {
        return this.formBuilder.group({
            Itemname: ['', Validators.required],
            Itemnum: ['', Validators.required]
        });
    }
    addLink() {
        const control = < FormArray > this.form.controls['attributes'];
        control.push(this.initLink());

        console.log(this.form.controls.attributes); 
    }
    removeLink(i: number) {
        const control = < FormArray > this.form.controls['attributes'];
        control.removeAt(i);
    }

    review(){
        this.router.navigate(['/review'])
    }

}

