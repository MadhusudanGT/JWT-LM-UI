import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const baseUrl = 'http://localhost:9192/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class JwtClientServiceService {

  constructor(private http: HttpClient) { }


  // public generateToken(request) {
  //   return this.httpClient.post<string>("http://localhost:9192/authenticate", request,{  responseType: 'text' as 'json' });
  // }
  generateToken(request: object): Observable<object> {  
    return this.http.post(baseUrl+'authenticate', request,{  responseType: 'text' as 'json' });  
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
    return this.http.get<String>(baseUrl+'test',opts);
  }

  public sendEmail(data) : Observable<Object>{
    return this.http.post(baseUrl+"email", data);
  }

  public getEmail():Observable<object>{
    return this.http.get(baseUrl+'email/'+'emails');
  }
}
