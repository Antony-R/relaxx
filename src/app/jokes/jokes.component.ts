
import { Component, OnInit } from '@angular/core';
import { JokesService } from 'src/app/services/jokes.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  random_joke: any = []
  shouldReveal: boolean = false
  firsttime = true

  constructor(private service: JokesService) {

  }

  ngOnInit() {

  }

  anyRandomJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.service.getanyRandomJoke()
      .subscribe(response => {
        this.random_joke = response
      }, error => {
        this.random_joke.setup = 'Some Error Occurred...'
      });
  }

  reveal() {
    this.shouldReveal = !this.shouldReveal
  }

  generalJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.service.getGeneralJoke()
      .subscribe(response => {
        this.random_joke = response
        this.random_joke = this.random_joke[0] //Since this request gets response as an array we assign first element to our variable.
      }, error => {
        this.random_joke.setup = 'Some Error Occured..'
      });
  }

  programmingJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.service.getProgrammingJoke()
      .subscribe(response => {
        this.random_joke = response
        this.random_joke = this.random_joke[0] //Since this request gets response as an array we assign first element to our variable.
      }, error => {
        this.random_joke.setup = 'Some Error Occured..'
      });
  }

}
