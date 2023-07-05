import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './cine/cine.component';
import { Distancia2puntosComponent } from './distancia2puntos/distancia2puntos/distancia2puntos.component';
import { ResistenciasComponent } from './resistencias/resistencias.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cine', component: CineComponent},
  {path: 'distancia', component: Distancia2puntosComponent},
  {path: 'resistencias', component: ResistenciasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
