import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core'
import { Observable, of, from, fromEvent } from 'rxjs'


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.sass']
})
export class RxjsComponent implements OnInit {

  @ViewChild('btn', { static: true }) button: ElementRef;



  // #1 creating observable

  obs = new Observable(
    (observ) => {

    observ.next(1)
    observ.next(2)
    observ.next(3)

  })

  // #2 of

  kev : string
  kevyn = of('KEVYN')

  // #3 from

  FROM = from('KEVYN JOHN CASTRO')
  fromarr : Array<any>;

  // #4 fromevent

  event = fromEvent( document, 'click')
  events : number = 0

  constructor() { }

  ngOnInit(): void {


    //subsrive

    const subs = this.obs.subscribe(
      {
      next(pos){
        console.log(pos)
      }
    })

    // of

    this.kevyn.subscribe( kevs => {
      this.kev = kevs;
    })


    //subscribe to from function
    this.FROM.subscribe({
      next(x){
        console.log(x)
      }
    })


    this.event.subscribe(x => {
      this.events++
      console.log('CLICKED! ', x)
    });






  }








}
