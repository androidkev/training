import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';
import { takeLast, takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.sass']
})
export class UnsubscribeComponent implements OnInit {

  source = interval(100);

  example = this.source.pipe(
    takeWhile(v => v <= 10)
    );

    example2 = this.source.pipe(
      takeUntil(timer(2000))
      );

      constructor() { }

      ngOnInit(): void {
        this.example.subscribe(console.log);
        this.example2.subscribe(console.log);

      }

    }
