import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecistenciaformulaComponent } from './recistenciaformula.component';

describe('RecistenciaformulaComponent', () => {
  let component: RecistenciaformulaComponent;
  let fixture: ComponentFixture<RecistenciaformulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecistenciaformulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecistenciaformulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
