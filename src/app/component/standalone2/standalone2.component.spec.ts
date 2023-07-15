import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Standalone2Component } from './standalone2.component';

describe('Standalone2Component', () => {
  let component: Standalone2Component;
  let fixture: ComponentFixture<Standalone2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Standalone2Component]
    });
    fixture = TestBed.createComponent(Standalone2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
