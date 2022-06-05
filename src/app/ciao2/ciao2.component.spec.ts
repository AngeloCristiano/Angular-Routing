import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ciao2Component } from './ciao2.component';

describe('Ciao2Component', () => {
  let component: Ciao2Component;
  let fixture: ComponentFixture<Ciao2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ciao2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ciao2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
