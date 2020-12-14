import { Component, OnInit } from '@angular/core';
import { share , shareReplay, publish } from 'rxjs/operators'
import { Observable, of, from, interval, fromEvent } from 'rxjs'

@Component({
  selector: 'app-hotcoldrxjs',
  templateUrl: './hotcoldrxjs.component.html',
  styleUrls: ['./hotcoldrxjs.component.sass']
})
export class HotcoldrxjsComponent implements OnInit {

  colds : any

  constructor() { }

  // cold sub

  cold = new Observable((obs) => {
    obs.next(Math.random())
  })


  // hot sub
  hot1 : any
  hot2 : any

  ngOnInit(): void {

    this.cold.subscribe(x=>{
      this.colds = x
    })

    const hot = this.cold.pipe(shareReplay(1))

    hot.subscribe(x=>{
      this.hot1 = x
    })

    hot.subscribe(x=>{
      this.hot2 = x
    })

  }

}
