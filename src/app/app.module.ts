import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import {MdInputModule} from '@angular/material';
import {MdButtonModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import {MdListModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdTableModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AddItem } from './app.additem';
import { AppLogin } from './app.login';
import { Appquote } from './app.quotation';
import { Admin } from './app.admin';
import { AddVendor } from './app.addvendor';
import { CreateQuote } from './app.create.quote';


import { RouterModule} from '@angular/router';
import { RouteDefinitions } from './routes/app.routes';

import { CanActivateAuthGuard } from './services/canActivate';

import {MdIconModule} from '@angular/material';

import {MdSidenavModule} from '@angular/material';


import 'hammerjs';

@NgModule({ 
  declarations: [
    AppComponent,
    AddItem,
    AppLogin,
    Appquote,
    Admin,
    AddVendor,
    CreateQuote
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    MdListModule,
    MdGridListModule,
    MdSidenavModule,
    MdTableModule,
    RouterModule.forRoot(RouteDefinitions)
  ],
  providers: [CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
