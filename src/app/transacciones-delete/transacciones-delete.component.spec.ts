import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesDeleteComponent } from './transacciones-delete.component';

describe('TransaccionesDeleteComponent', () => {
  let component: TransaccionesDeleteComponent;
  let fixture: ComponentFixture<TransaccionesDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionesDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransaccionesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
