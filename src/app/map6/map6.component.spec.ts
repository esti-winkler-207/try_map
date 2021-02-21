import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map6Component } from './map6.component';

describe('Map6Component', () => {
  let component: Map6Component;
  let fixture: ComponentFixture<Map6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Map6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
