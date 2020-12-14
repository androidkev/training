import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { map, filter, first, take, scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.sass']
})
export class OperatorsComponent implements OnInit {

  source = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  source1 = of('kevyn')

  arr1 : Array<number> = []
  arr2 : Array<number> = []
  arr3 : Array<number> = []
  arr4 : Array<number> = []


  // TAP

  tap1 = this.source1.pipe(
    tap(x => console.log('TAP: ', x)),
    map( v => v.toUpperCase() ),
    tap( y => console.log('MAP AND TAP', y)),
    map( v => 'KEVYN JOHN CASTRO'),
    tap(async v  => {
      await Promise.resolve(console.log(v));
    })
  )




  // OPERATORS

  mod = this.source.pipe(

  )

  mod2 = this.source.pipe(
    scan((acc, val) => acc + val)
  )

  mod3 = this.source.pipe(
    map( n => Math.pow(n,2) )
  )

  mod4 = this.source.pipe(
    map( n => Math.pow(n,2) ),
    filter( x => x>10 )
  )

  constructor() { }

  ngOnInit(): void {

    this.mod.subscribe(x=>{

      this.arr1.push(x)
      console.log('operator ',x)
    })

    this.mod2.subscribe(
      x=> {

        this.arr2.push(x)
        console.log('scan ', x)
      }
    )

    this.mod3.subscribe(
      x =>{

        this.arr3.push(x)
        console.log('map ', x)
      }
    )

    this.mod4.subscribe(
      x =>{

        this.arr4.push(x)
        console.log('map ', x)
      }
    )

    this.tap1.subscribe(

    )


  }

}
