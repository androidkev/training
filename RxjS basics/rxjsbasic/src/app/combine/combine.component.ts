import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.sass']
})
export class CombineComponent implements OnInit {

  randoAsync = new Observable(o => o.next(Math.random()));
  delayed = this.randoAsync.pipe(delay(1000));

  constructor() { }

  ngOnInit(): void {
    const combo = combineLatest([
      this.delayed,
      this.randoAsync,
      this.randoAsync,
      this.randoAsync,
    ]);

    combo.subscribe(console.log)

    const merged = merge(
      this.delayed,
      this.randoAsync,
      this.randoAsync,
      this.randoAsync,
      )

      merged.subscribe(console.log)

    }

  }
