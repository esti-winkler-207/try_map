import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Map5Component } from './map5.component';

describe('Map5Component', () => {
  let component: Map5Component;
  let fixture: ComponentFixture<Map5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Map5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Map5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
