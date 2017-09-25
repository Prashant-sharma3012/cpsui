import { Component , OnInit,ViewEncapsulation ,ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormGroup,FormArray,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {DataSource} from '@angular/cdk/collections';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.create.project.html',
  styleUrls: ['./app.create.project.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateProject implements OnInit {
    isLinear = false;
    firstFormGroup: FormGroup;
    thirdFormGroup: FormGroup;

    displayedColumns = ['id', 'process', 'Description'];
    dataSource = new ExampleDataSource();

    displayedColumns1 = ['id', 'Item', 'Quantity'];
    dataSource1 = new ExampleDataSource1();

    step = 0;
    
      setStep(index: number) {
        this.step = index;
      }
    
      nextStep() {
        this.step++;
      }
    
      prevStep() {
        this.step--;
      }

    constructor(private _formBuilder: FormBuilder) { 
    }
  
    ngOnInit() {

      this.firstFormGroup = this._formBuilder.group({
        projName: ['', Validators.required],
        projType: ['', Validators.required],
        projDesc: ['', Validators.required],
        clientName: ['', Validators.required],
        projStartDate: ['', Validators.required],
        projEndDate: ['', Validators.required],
        location:['', Validators.required]

      });
      this.thirdFormGroup = this._formBuilder.group({
        thirdCtrl: ['', Validators.required]
      });
    }
}

export interface process {
    id: number;
    process: string;
    desc:string;
};

export interface item {
    id: number;
    item: string;
    qty:number;
};
  
  const data: process[] = [
    {id: 1, process: 'Process 1', desc: 'process 1'},
    {id: 2, process: 'Process 1', desc: 'process 1'},
    {id: 3, process: 'Process 1', desc: 'process 1'},
    {id: 4, process: 'Process 1', desc: 'process 1'},
    {id: 5, process: 'Process 1', desc: 'process 1'},
    {id: 6, process: 'Process 1', desc: 'process 1'},
    {id: 7, process: 'Process 1', desc: 'process 1'},
    {id: 8, process: 'Process 1', desc: 'process 1'},
    {id: 9, process: 'Process 1', desc: 'process 1'},
    {id: 10, process: 'Process 1', desc: 'process 1'},
  ];

const data1: item[] = [
    {id: 1, item: 'Item 1', qty: 3},
    {id: 1, item: 'Item 2', qty: 4},
    {id: 1, item: 'Item 3', qty: 5},
    {id: 1, item: 'Item 4', qty: 3},
    {id: 1, item: 'Item 5', qty: 3},
    {id: 1, item: 'Item 6', qty: 8},
    {id: 1, item: 'Item 1', qty: 13}
  ];
  
  export class ExampleDataSource extends DataSource<any> {
    connect(): Observable<process[]> {
      return Observable.of(data);
    }
    
    disconnect() {}
  }

  export class ExampleDataSource1 extends DataSource<any> {
    connect(): Observable<item[]> {
      return Observable.of(data1);
    }
    
    disconnect() {}
  }