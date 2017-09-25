
import { AppComponent } from '../app.component';
import { AddItem } from '../app.additem';
import { AppLogin } from '../app.login';
import { Appquote } from '../app.quotation';
import { Admin } from '../app.admin';
import { AddVendor } from '../app.addvendor';
import { CreateQuote } from '../app.create.quote';
import { CreateProject } from '../app.create.project';
import { Quotes } from '../app.quotes';



import { CanActivateAuthGuard } from '../services/canActivate' ;

export const RouteDefinitions: [object] = [
        {path: '', component: AppLogin},
        {path: 'home', component: Admin, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'item', component: AddItem, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'quote', component: CreateQuote, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'vendor', component: AddVendor, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'review', component: Appquote, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'project', component: CreateProject, canActivate: [
        CanActivateAuthGuard
        ]},
        {path: 'quotes', component: Quotes, canActivate: [
        CanActivateAuthGuard
        ]}
    ];


    