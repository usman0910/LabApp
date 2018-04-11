"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var patientData_service_1 = require("./patientData.service");
var PatientComponent = /** @class */ (function () {
    function PatientComponent(_patientService) {
        this._patientService = _patientService;
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
    PatientComponent.prototype.ngOnInit = function () {
        this._patientService.SavePatient(this.data)
            .subscribe(function (result) { return console.log(result); }, function (error) { return console.log(error); });
    };
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patient',
            templateUrl: 'app/patient/patient.component.html'
        }),
        __metadata("design:paramtypes", [patientData_service_1.PatientService])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.component.js.map