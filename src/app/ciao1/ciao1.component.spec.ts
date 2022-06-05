import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciao1Component } from './ciao1.component';

describe('Ciao1Component', () => {
  let component: Ciao1Component;
  let fixture: ComponentFixture<Ciao1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ciao1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciao1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
