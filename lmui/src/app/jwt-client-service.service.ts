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


  public welcome(token) : Observable<Object>{
    console.log("token"+token)
   const opts={
     headers:new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' +token,
     }),
     responseType: 'text' as 'json' //important
   }
    // let tokenStr = 'Bearer ' + token;
    // const headers = new HttpHeaders().set('Authorization', tokenStr,);
    // return this.http.get("http://localhost:9192/",headers);
    return this.http.get<String>("http://localhost:9192/test/", opts);
  }
}
