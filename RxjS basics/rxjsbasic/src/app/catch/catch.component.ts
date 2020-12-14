import { Component, OnInit } from '@angular/core';
import { of, Subject, interval } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.sass']
})
export class CatchComponent implements OnInit {

  sub = new Subject();



  constructor() { }

  ngOnInit(): void {
    this.sub.pipe(
      catchError(err => of('may error pero okay na 🕶️')),
      //retry(2)
      ).subscribe({
        next: val => console.log(val),
        error: val => console.log(val)
      })

      this.sub.next('good');
      this.sub.error('💥 broken!');

    }

  }
