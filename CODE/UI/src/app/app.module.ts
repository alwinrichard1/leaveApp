import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialImports } from './app-materials.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { templateImports } from './app-templates.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaveMgmtComponent } from './leaveMgmt/leaveMgmt.component';
import { ChartsModule } from 'ng2-charts';
import { ApprovalEscltnsComponent } from './approval-escltns/approval-escltns.component';
import { PersonalComponent } from './dashboard/personal/personal.component';
import { TeamComponent } from './dashboard/team/team.component';
import { SubPageApprvlComponent } from './approval-escltns/sub-page-apprvl/sub-page-apprvl.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        SidebarComponent,
        HeaderComponent,
        FooterComponent,
        AdminComponent,
        templateImports,
        DashboardComponent,
        LeaveMgmtComponent,
        ApprovalEscltnsComponent,
        PersonalComponent,
        TeamComponent,
        SubPageApprvlComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        materialImports,
        ChartsModule,
        AngularFireModule.initializeApp(environment.firebase,'eq-my-leaves'),
        AngularFirestoreModule,
        AngularFireStorageModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule 
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        templateImports
    ]
})
export class AppModule { }
