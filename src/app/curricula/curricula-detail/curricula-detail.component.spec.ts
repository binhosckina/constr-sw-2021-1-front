import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculaDetailComponent } from './curricula-detail.component';

describe('CurriculaDetailComponent', () => {
  let component: CurriculaDetailComponent;
  let fixture: ComponentFixture<CurriculaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
