import { Component, OnInit } from '@angular/core';
import { TransaccionesService, Transaccion } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones-list',
  templateUrl: './transacciones-list.component.html',
  styleUrls: ['./transacciones-list.component.css']
})
export class TransaccionesListComponent implements OnInit {
  transacciones: Transaccion[] = [];

  constructor(private transaccionesService: TransaccionesService) { }

  ngOnInit(): void {
    this.transaccionesService.obtenerTransacciones().subscribe((data) => {
      this.transacciones = data;
    });
  }

  eliminarTransaccion(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta transacción?')) {
      this.transaccionesService.eliminarTransaccion(id).subscribe(() => {
        this.transacciones = this.transacciones.filter(transaccion => transaccion.id_transaccion !== id);
      });
    }
  }
}
