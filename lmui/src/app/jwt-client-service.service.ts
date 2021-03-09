import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JwtClientServiceService {

  constructor(private http: HttpClient) { }


  // public generateToken(request) {
  //   return this.httpClient.post<string>("http://localhost:9192/authenticate", request,{  responseType: 'text' as 'json' });
  // }
  baseUrl="http://localhost:9192/";
  generateToken(request: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'authenticate', request,{  responseType: 'text' as 'json' });  
  }  


  public welcome(token) {
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr,);
    return this.http.get<string>("http://localhost:9192/",{headers, responseType: 'text' as 'json' });
  }
}
