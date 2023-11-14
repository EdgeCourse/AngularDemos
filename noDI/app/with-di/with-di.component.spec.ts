import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDIComponent } from './with-di.component';

describe('WithDIComponent', () => {
  let component: WithDIComponent;
  let fixture: ComponentFixture<WithDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithDIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
