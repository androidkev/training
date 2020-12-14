import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpressureComponent } from './backpressure.component';

describe('BackpressureComponent', () => {
  let component: BackpressureComponent;
  let fixture: ComponentFixture<BackpressureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpressureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpressureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
