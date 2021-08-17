import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGateComponent } from './access-gate.component';

describe('AccessGateComponent', () => {
  let component: AccessGateComponent;
  let fixture: ComponentFixture<AccessGateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessGateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessGateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
