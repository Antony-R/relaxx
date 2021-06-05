import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  url: string = 'https://official-joke-api.appspot.com/'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getanyRandomJoke() {
    return this.http.get(this.url + 'random_joke')
  }

  getGeneralJoke() {
    return this.http.get(this.url + 'jokes/general/random')
  }

  getProgrammingJoke() {
    return this.http.get(this.url + 'jokes/programming/random')
  }

}
