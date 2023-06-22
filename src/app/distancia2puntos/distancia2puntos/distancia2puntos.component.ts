import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia2puntos',
  templateUrl: './distancia2puntos.component.html',
  styleUrls: ['./distancia2puntos.component.css']
})
export class Distancia2puntosComponent {
  x1!:number;
  y1!:number;
  x2!:number;
  y2!:number;
  resultado!:number;

  calcular(){
    this.resultado = Math.sqrt(Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2));
  }

}
