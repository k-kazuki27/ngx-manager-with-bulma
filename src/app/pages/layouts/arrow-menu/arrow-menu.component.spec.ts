import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowMenuComponent } from './arrow-menu.component';

describe('ArrowMenuComponent', () => {
  let component: ArrowMenuComponent;
  let fixture: ComponentFixture<ArrowMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
