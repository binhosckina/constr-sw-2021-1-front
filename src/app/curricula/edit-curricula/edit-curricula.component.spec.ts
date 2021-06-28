import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurriculaComponent } from './edit-curricula.component';

describe('EditCurriculaComponent', () => {
  let component: EditCurriculaComponent;
  let fixture: ComponentFixture<EditCurriculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCurriculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurriculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
