import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithFormComponent } from './work-with-form.component';

describe('WorkWithFormComponent', () => {
  let component: WorkWithFormComponent;
  let fixture: ComponentFixture<WorkWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWithFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
