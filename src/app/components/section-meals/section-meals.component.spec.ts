import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMealsComponent } from './section-meals.component';

describe('SectionMealsComponent', () => {
  let component: SectionMealsComponent;
  let fixture: ComponentFixture<SectionMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
