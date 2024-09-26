import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransaccionesService, Transaccion } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones-add',
  templateUrl: './transacciones-add.component.html',
  styleUrls: ['./transacciones-add.component.css']
})
export class TransaccionesAddComponent {
  nuevaTransaccion: Transaccion = {
    fecha_transaccion: '',
    cod_tipo_transaccion: 0,
    cod_catalogo: 0
  };

  constructor(private transaccionesService: TransaccionesService, private router: Router) { }

  agregarTransaccion(): void {
    this.transaccionesService.crearTransaccion(this.nuevaTransaccion).subscribe(() => {
      this.router.navigate(['/transacciones-list']);
    });
  }
}
