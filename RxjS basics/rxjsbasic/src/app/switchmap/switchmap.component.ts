import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators'


@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.sass']
})
export class SwitchmapComponent implements OnInit {

  constructor() { }

  user$ = of({ uid: Math.random() })

  orders$ = this.user$.pipe(
    switchMap(user=>{
      console.log(user.uid)
      return this.fetchOrders(user.uid)
    })
  )

  ngOnInit(): void {

    this.orders$.subscribe()

  }

  fetchOrders = (userId) => {
    console.log(`${userId}'s order data`)
    return of(`${userId}'s order data`);
  }

}
