import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutDIComponent } from './without-di.component';

describe('WithoutDIComponent', () => {
  let component: WithoutDIComponent;
  let fixture: ComponentFixture<WithoutDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithoutDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithoutDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
