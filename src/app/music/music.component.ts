import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  song1Playing(){
    let song2: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song2')
    song2!.pause()
    let song3: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song3')
    song3!.pause()
  }
  song2Playing(){
    let song1: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song1')
    song1!.pause()
    let song3: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song3')
    song3!.pause()
  }
  song3Playing(){
    let song2: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song2')
    song2!.pause()
    let song1: HTMLAudioElement = <HTMLAudioElement> document.getElementById('song1')
    song1!.pause()
  }

  sound1Playing(){
    let sound2: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound2')
    sound2!.pause()
    let sound3: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound3')
    sound3!.pause()
  }
  sound2Playing(){
    let sound1: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound1')
    sound1!.pause()
    let sound3: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound3')
    sound3!.pause()
  }
  sound3Playing(){
    let sound2: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound2')
    sound2!.pause()
    let sound1: HTMLAudioElement = <HTMLAudioElement> document.getElementById('sound1')
    sound1!.pause()
  }

}
