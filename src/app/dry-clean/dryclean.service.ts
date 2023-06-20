import { IpriceDry } from './price';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DrycleanService {
  private url = "http://localhost:3000/dry-clean";

  constructor(private httpClient : HttpClient) { }

  getAll() : Observable <any> {
    return this.httpClient.get(this.url);
  }

  addCart(post : IpriceDry): Observable <any> {
    return this.httpClient.post(this.url, post);
  }

  find(id : number) : Observable <any> {
    return this.httpClient.get(this.url + id);
  }
  updateCart(post : IpriceDry) {
    return this.httpClient.put(this.url + post.id, post)
  }

  deleteCart(id:number){
    return this.httpClient.delete(this.url + id);
  }

}
