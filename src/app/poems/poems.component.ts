import { Component, OnInit } from '@angular/core';
import { PoemsService } from '../services/poems.service';

@Component({
  selector: 'app-poems',
  templateUrl: './poems.component.html',
  styleUrls: ['./poems.component.css']
})
export class PoemsComponent implements OnInit {

  poem: any = []
  firsttime = true
  errormsg = ''

  constructor(private service: PoemsService) { }

  ngOnInit(): void {
  }

  getPoem() {
    this.firsttime = false
    this.service.getARandomPoem()
      .subscribe(response => {
        this.poem = response
        this.poem = this.poem[0]
        if (this.poem === undefined) this.errormsg = 'Some Error Occured... '
      }, error => {
        this.errormsg = 'Some Error Occured...'
      });
  }

}
