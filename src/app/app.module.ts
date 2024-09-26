import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaccionesListComponent } from './transacciones-list/transacciones-list.component';
import { TransaccionesAddComponent } from './transacciones-add/transacciones-add.component';
import { TransaccionesEditComponent } from './transacciones-edit/transacciones-edit.component';
import { TransaccionesDeleteComponent } from './transacciones-delete/transacciones-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TransaccionesListComponent,
    TransaccionesAddComponent,
    TransaccionesEditComponent,
    TransaccionesDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
