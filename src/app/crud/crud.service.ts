import { Icrud } from './interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private url = "http://localhost:3000";

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }

  constructor(private httpClient : HttpClient) { }

  getAllData() : Observable <any>{
    return this.httpClient.get(this.url + '/sign-up');
  }

  findData(id : number) : Observable <any> {
    return this.httpClient.get(this.url + '/sign-up/' + id);
  }

  createData(data : Icrud) : Observable <any> {
    return this.httpClient.post(this.url + '/sign-up', JSON.stringify(data), this.httpOptions);
  }

  updateData(id : number, data : Icrud) : Observable <any> {
    return this.httpClient.put(this.url + '/sign-up/' + id, JSON.stringify(data), this.httpOptions);
  }

  deleteData(id : number) {
    return this.httpClient.delete(this.url + '/sign-up/' + id, this.httpOptions);
  }

  // getAll() : Observable <any>{
  //   return this.httpClient.get<any>(this.url + '/crud');
  // }

  // findData(id : number) : Observable <any>{
  //   return this.httpClient.get<any>(this.url + '/crud/' + id);
  // }

  // createData(field : Icrud) : Observable <any>{
  //   return this.httpClient.post<any>(this.url + '/crud', JSON.stringify(field), this.httpOptions);
  // }

  // updateData(id : number, field : Icrud) : Observable <any>{
  //   return this.httpClient.put<any>(this.url + '/crud/' + id, JSON.stringify(field), this.httpOptions);
  // }

  // deleteData(id : number){
  //   return this.httpClient.delete<any>(this.url + '/crud/' + id, this.httpOptions);
  // }

}
