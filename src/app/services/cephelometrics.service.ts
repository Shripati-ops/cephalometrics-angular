import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CephelometricsService {

  constructor(private http : HttpClient) { }


  getAllXRays(){
    return this.http.get(environment.baseUrl + "cephelometrics/all-xrays");
  }

  uploadXRayData(payload:any) {
    return this.http.post(environment.baseUrl + "cephelometrics/uploadData", payload);
  }

  uploadCephData(payload:any){
    return this.http.post(environment.baseUrl + "cephelometrics/uploadCephData", payload)
  }

  getCephInnerData(payload:any){
    return this.http.post(environment.baseUrl + "cephelometrics/getCephInner",payload);
  }
}
