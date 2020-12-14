import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime, bufferCount, map } from 'rxjs/operators';

@Component({
  selector: 'app-backpressure',
  templateUrl: './backpressure.component.html',
  styleUrls: ['./backpressure.component.sass']
})
export class BackpressureComponent implements OnInit {

  event = fromEvent(document, 'mousemove').pipe(map(_ => Math.random() + ' YOU MOVED'));
  string : string

  constructor() { }

  ngOnInit(): void {
    const debounced = this.event.pipe(debounceTime(0));
    debounced.subscribe(x=>{
      this.string=x});
    const throttled = this.event.pipe(throttleTime(0));
    const buffered = this.event.pipe(bufferCount(0));
  }

}
