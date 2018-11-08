import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', component: LoginComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

/**ADD COMPONENTS IN routingComponents */
export const routingComponents = [
    LoginComponent
];
