import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CineComponent } from './cine.component';
import { MatSelectModule } from '@angular/material/select'



@NgModule({
  declarations: [
    CineComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    NgIf,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    CineComponent
  ]
})
export class CineModule { }
