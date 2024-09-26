import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { TransaccionesAddComponent } from './transacciones-add/transacciones-add.component';
import { TransaccionesEditComponent } from './transacciones-edit/transacciones-edit.component';
import { TransaccionesDeleteComponent } from './transacciones-delete/transacciones-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/transacciones-list', pathMatch: 'full' },
  { path: 'transacciones-list', component: TransaccionesListComponent },
  { path: 'transacciones-add', component: TransaccionesAddComponent },
  { path: 'transacciones-edit/:id', component: TransaccionesEditComponent },
  { path: 'transacciones-delete/:id', component: TransaccionesDeleteComponent },
  { path: '**', redirectTo: '/transacciones-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
