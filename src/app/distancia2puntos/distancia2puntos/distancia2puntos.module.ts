import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Distancia2puntosComponent } from './distancia2puntos.component';


@NgModule({
  declarations: [
    Distancia2puntosComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    Distancia2puntosComponent
  ]
})
export class Distancia2puntosModule { }
