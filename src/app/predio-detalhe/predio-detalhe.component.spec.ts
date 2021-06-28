import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredioDetalheComponent } from './predio-detalhe.component';

describe('PredioDetalheComponent', () => {
  let component: PredioDetalheComponent;
  let fixture: ComponentFixture<PredioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredioDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PredioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
