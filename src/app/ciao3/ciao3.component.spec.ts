import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciao3Component } from './ciao3.component';

describe('Ciao3Component', () => {
  let component: Ciao3Component;
  let fixture: ComponentFixture<Ciao3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ciao3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciao3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
