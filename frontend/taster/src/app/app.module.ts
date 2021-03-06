import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewWineFormComponent } from './forms/new-wine-form/new-wine-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WineListComponent } from './wine-list/wine-list.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewAssessmentFormComponent } from './forms/new-assessment-form/new-assessment-form.component';
import { RadioTemplateComponent } from './forms/radio-template/radio-template.component';
import { WineDetailComponent } from './wine-detail/wine-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AddWineryFormComponent } from './forms/add-winery-form/add-winery-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewWineFormComponent,
    NavigationComponent,
    WineListComponent,
    LoginComponent,
    NewAssessmentFormComponent,
    RadioTemplateComponent,
    WineDetailComponent,
    AddWineryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
