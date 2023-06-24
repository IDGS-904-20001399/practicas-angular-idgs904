import { Component } from '@angular/core';
import { Banda } from './resistencias/Banda';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista = ['a', 'b', 'c']

  banda1Op : Banda[] = [
    {'valor': 0, 'text': 'Negro', 'color': 'black'},
    {'valor': 1, 'text': 'Café', 'color': 'brown'},
    {'valor': 2, 'text': 'Rojo', 'color': 'red'},
    {'valor': 3, 'text': 'Naranja', 'color': 'orange'},
    {'valor': 4, 'text': 'Amarillo', 'color': 'yellow'},
    {'valor': 5, 'text': 'Verde', 'color': 'green'},
    {'valor': 6, 'text': 'Azul', 'color': 'blue'},
    {'valor': 7, 'text': 'Violeta', 'color': 'violet'},
    {'valor': 8, 'text': 'Gris', 'color': 'gray'},
    {'valor': 9, 'text': 'Blanco', 'color': 'white'},
  ]

  bandas2Op = [
    {'valor': 0, 'text': 'Negro', 'color': 'black'},
    {'valor': 1, 'text': 'Café', 'color': 'brown'},
    {'valor': 2, 'text': 'Rojo', 'color': 'red'},
    {'valor': 3, 'text': 'Naranja', 'color': 'orange'},
    {'valor': 4, 'text': 'Amarillo', 'color': 'yellow'},
    {'valor': 5, 'text': 'Verde', 'color': 'green'},
    {'valor': 6, 'text': 'Azul', 'color': 'blue'},
    {'valor': 7, 'text': 'Violeta', 'color': 'violet'},
    {'valor': 8, 'text': 'Gris', 'color': 'gray'},
    {'valor': 9, 'text': 'Blanco', 'color': 'white'},
  ]

  bandas3Op = [
    {'valor': 1, 'text': 'Negro', 'color': 'black'},
    {'valor': 10, 'text': 'Café', 'color': 'brown'},
    {'valor': 100, 'text': 'Rojo', 'color': 'red'},
    {'valor': 1000, 'text': 'Naranja', 'color': 'orange'},
    {'valor': 10000, 'text': 'Amarillo', 'color': 'yellow'},
    {'valor': 100000, 'text': 'Verde', 'color': 'green'},
    {'valor': 1000000, 'text': 'Azul', 'color': 'blue'},
    {'valor': 10000000, 'text': 'Violeta', 'color': 'violet'},
    {'valor': 100000000, 'text': 'Gris', 'color': 'gray'},
    {'valor': 1000000000, 'text': 'Blanco', 'color': 'white'},
  ];
  toleranciasOp = [
    {'valor': 0.05, 'text': 'Plata', 'color': 'silver'},
    {'valor': 0.10, 'text': 'Dorado', 'color': 'GoldenRod'},
  ];

  banda1!:Banda
  banda2!:Banda
  banda3!:Banda
  tolerancia!:Banda
}
