import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotcoldrxjsComponent } from './hotcoldrxjs.component';

describe('HotcoldrxjsComponent', () => {
  let component: HotcoldrxjsComponent;
  let fixture: ComponentFixture<HotcoldrxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotcoldrxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotcoldrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
