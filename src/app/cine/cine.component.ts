import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {
  nombre: string = '';
  compradores: number = 1;
  tarjeta: string = '';
  tarjetaOp = ['Si', 'No']
  boletos: number = 1;
  valorPagar: number = 1;
  maxBoletos: number = this.compradores * 7;
  subtotal: number = 0;
  precio: number = 12;
  descuento: number = 0;
  descuento_pesos: number = 0;
  total: number = 0;
  descuento_adicional: number = 0


  actualizarMax() {
    this.maxBoletos = this.compradores * 7;
  }

  calcular() {
    this.subtotal = this.precio * this.boletos

    if (this.boletos > 5) {

      this.descuento = 15
    }
    else if (this.boletos >= 3) {
      this.descuento = 10
    }

    this.descuento_pesos = this.subtotal * this.descuento / 100
    this.total = this.subtotal - this.descuento_pesos

    if (this.tarjeta == 'Si') {
      this.descuento_adicional = this.total * 10 / 100
      this.total = this.total - this.descuento_adicional
    }
  }

}
