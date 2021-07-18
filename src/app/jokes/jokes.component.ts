
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
  spin = false

  constructor(private service: JokesService) {

  }

  ngOnInit() {

  }

  anyRandomJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.spin = true
    this.service.getanyRandomJoke()
      .subscribe(response => {
        this.spin = false
        this.random_joke = response
      }, error => {
        this.random_joke.setup = 'Some Error Occurred...'
        this.spin = false
      });
  }

  reveal() {
    this.shouldReveal = !this.shouldReveal
  }

  generalJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.spin = true
    this.service.getGeneralJoke()
      .subscribe(response => {
        this.spin = false
        this.random_joke = response
        this.random_joke = this.random_joke[0] //Since this request gets response as an array we assign first element to our variable.
      }, error => {
        this.random_joke.setup = 'Some Error Occured..'
        this.spin = false
      });
  }

  programmingJoke() {
    this.shouldReveal = false
    this.firsttime = false
    this.spin = true
    this.service.getProgrammingJoke()
      .subscribe(response => {
        this.spin = false
        this.random_joke = response
        this.random_joke = this.random_joke[0] //Since this request gets response as an array we assign first element to our variable.
      }, error => {
        this.random_joke.setup = 'Some Error Occured..'
        this.spin = false
      });
  }

}
