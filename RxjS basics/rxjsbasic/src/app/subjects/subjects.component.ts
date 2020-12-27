import { Component, OnInit } from '@angular/core';
import { share , shareReplay, publish } from 'rxjs/operators'
import { Subject, BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {

  subj = new Subject()
  behsubj = new BehaviorSubject('KEVYN1')

  bs1 : any
  bs2: any

  printtodom : any


  constructor() { }

  ngOnInit(): void {

    this.subj.subscribe((x) => {
      this.printtodom = x
    })

    this.subj.next('KEVYN CASTRO')


    this.behsubj.subscribe((x) => {
      this.bs1 = x
    })

    this.behsubj.next('KEVYN2')

    this.behsubj.next('KEVYN3')

    this.behsubj.next('KEVYN4')


    this.behsubj.subscribe((x) => {
      this.bs2 = x
    })

  }

}
