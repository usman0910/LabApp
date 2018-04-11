import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { PatientComponent } from './patient/patient.component';
import { PatientService } from './patient/patientData.service';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, PatientComponent],
    providers: [PatientService],
    bootstrap: [AppComponent]
})
export class AppModule { }
