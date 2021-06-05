import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoemsService {

  url: string = 'https://poetrydb.org/random,linecount/1;'

  constructor(private http: HttpClient) { }

  getARandomPoem() {
    let max = 15;
    let min = 5;
    let linecountLimit = Math.floor(Math.random() * (max - min)) + min;
    return this.http.get(this.url + linecountLimit)
  }

}
