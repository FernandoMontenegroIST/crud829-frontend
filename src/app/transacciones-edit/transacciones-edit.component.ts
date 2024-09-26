import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransaccionesService, Transaccion } from '../services/transacciones.service';

@Component({
  selector: 'app-transacciones-edit',
  templateUrl: './transacciones-edit.component.html',
  styleUrls: ['./transacciones-edit.component.css']
})
export class TransaccionesEditComponent implements OnInit {
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

  actualizarTransaccion(): void {
    if (this.transaccion && this.transaccion.id_transaccion) {
      this.transaccionesService.actualizarTransaccion(this.transaccion.id_transaccion, this.transaccion)
        .subscribe(() => {
          this.router.navigate(['/transacciones-list']);
        });
    }
  }
}
