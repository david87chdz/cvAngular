import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicExperienceComponent } from './academic-experience.component';

describe('AcademicExperienceComponent', () => {
  let component: AcademicExperienceComponent;
  let fixture: ComponentFixture<AcademicExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
