import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeBicamedicComponent } from './welcome-bicamedic.component';

describe('WelcomeBicamedicComponent', () => {
  let component: WelcomeBicamedicComponent;
  let fixture: ComponentFixture<WelcomeBicamedicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeBicamedicComponent]
    });
    fixture = TestBed.createComponent(WelcomeBicamedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
