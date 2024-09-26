import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionesService, Transaccion } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones-delete',
  templateUrl: './transacciones-delete.component.html',
  styleUrls: ['./transacciones-delete.component.css']
})
export class TransaccionesDeleteComponent implements OnInit {
  transaccion: Transaccion | undefined;

  constructor(
    private route: ActivatedRoute,
    private transaccionesService: TransaccionesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.transaccionesService.obtenerTransacciones().subscribe((data) => {
        this.transaccion = data.find(t => t.id_transaccion === +id);
      });
    }
  }

  eliminarTransaccion(): void {
    if (this.transaccion && this.transaccion.id_transaccion) {
      this.transaccionesService.eliminarTransaccion(this.transaccion.id_transaccion).subscribe(() => {
        this.router.navigate(['/transacciones-list']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/transacciones-list']);
  }
}
