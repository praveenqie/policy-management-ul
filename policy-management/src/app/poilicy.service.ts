import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PoilicyService {

  constructor(private _client: HttpClient) { }



  baseUrl = 'http://localhost:8082/api'


  login(loginRequest: any): Observable<any> {
    let url = `${this.baseUrl}/login`
    return this._client.post(url, loginRequest);
  }
  register(registerRequest: any) {
    let url = `${this.baseUrl}/register`
    return this._client.post(url, registerRequest);
  }

  getAllPolicies() {
    let url = `${this.baseUrl}/getPolicies`
    return this._client.get(url);
  }
  getPolicyDetails(custId: any) {
    let url = `${this.baseUrl}/getPolicies/${custId}`
    return this._client.get(url);
  }
}
