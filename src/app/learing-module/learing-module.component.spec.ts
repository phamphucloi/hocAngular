import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearingModuleComponent } from './learing-module.component';

describe('LearingModuleComponent', () => {
  let component: LearingModuleComponent;
  let fixture: ComponentFixture<LearingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearingModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
