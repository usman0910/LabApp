import { Injectable } from "@angular/core";
import { HttpModule, Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { IPatient } from "./patient";

@Injectable()
export class PatientService {


    constructor(private _http: Http) { }

    SavePatient(data: IPatient): Observable<IPatient> {

        var myJson = JSON.stringify(data);
        var params = 'json=' + myJson;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("http://localhost:58133/api/Patient", params, { headers: headers })
            .map((response: Response) => <IPatient>response.json());
    }
}
