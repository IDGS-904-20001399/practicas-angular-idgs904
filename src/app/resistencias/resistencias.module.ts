import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistenciasComponent } from './resistencias.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { NgIf } from '@angular/common';
// import { NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ResistenciasComponent,
  ],
  imports: [
    CommonModule,
    // NgIf,
    // NgFor,
    FormsModule
  ],
  exports: [
    ResistenciasComponent
  ]
})
export class ResistenciasModule { }
