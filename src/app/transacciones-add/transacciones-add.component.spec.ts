import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesAddComponent } from './transacciones-add.component';

describe('TransaccionesAddComponent', () => {
  let component: TransaccionesAddComponent;
  let fixture: ComponentFixture<TransaccionesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionesAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
