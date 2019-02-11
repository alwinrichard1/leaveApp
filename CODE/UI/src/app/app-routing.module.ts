import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { leaveMgmtComponent } from './leaveMgmt/leaveMgmt.component';
import { ApprovalEscltnsComponent } from './approval-escltns/approval-escltns.component';

/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'leaveMgmt', component: leaveMgmtComponent },
    { path: 'approval-escltns', component:ApprovalEscltnsComponent },
    { path: '**', component: HomeComponent },

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
