import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveMgmtComponent } from './leaveMgmt/leaveMgmt.component';
import { ApprovalEscltnsComponent } from './approval-escltns/approval-escltns.component';
import { SubPageApprvlComponent } from './approval-escltns/sub-page-apprvl/sub-page-apprvl.component';

/** INCLUDE PATH IN ROUTES */
const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/:pageType', component: DashboardComponent },
    { path: 'leaveMgmt', component: LeaveMgmtComponent },
    { path: 'approval-escltns', component: ApprovalEscltnsComponent },
    { path: 'approval-escltns/user/:userId', component: SubPageApprvlComponent },
    { path: '**', component: DashboardComponent },

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
