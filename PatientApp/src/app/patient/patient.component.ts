import { Component, OnInit } from '@angular/core';
import { IPatient } from './patient';
import { PatientService } from './patientData.service';

@Component({
    selector: 'patient',
    templateUrl: 'app/patient/patient.component.html'
})
export class PatientComponent implements OnInit {

    data: IPatient;
    constructor(private _patientService: PatientService) {

        this.data = {
            name: 'Ali',
            locationName: 'Sidiq Trade Centre',
            locationAddress: 'Sidiq Trade Centre',
            latitude: '1111',
            longitude: '22222'
        };

    }
    
    //testData = this.myData.Name;

    //myPatient: IPatient = {
    //    Name: 'Usman',
    //    LocationName: 'Sidiq Trade Centre',
    //    LocationAddress: 'Sidiq Trade Centre',
    //    Latitude: '1111',
    //    Longitude: '22222'
    //};

    ngOnInit() {
        this._patientService.SavePatient(this.data)
            .subscribe((result) => console.log(result),
            error => console.log(error)
        );

        
    }
}