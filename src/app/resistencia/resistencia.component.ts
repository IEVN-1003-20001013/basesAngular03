import { Component } from '@angular/core';
import { Color } from './recistenciaformula';
import { ResistenciaFormula } from './recistenciaformula';
import { Tolerancia } from './recistenciaformula';

@Component({
   selector: 'app-resistencia',
standalone: false,
 templateUrl: './resistencia.component.html',
 styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {
 colores: Color[] = [
 { nombre: 'negro', hex: 'black', valor: 0, multiplicador: 1 },
 { nombre: 'cafe', hex: 'saddlebrown', valor: 1, multiplicador: 10 },
 { nombre: 'rojo', hex: 'red', valor: 2, multiplicador: 100 },
 { nombre: 'naranja', hex: 'orange', valor: 3, multiplicador: 1000 },
 { nombre: 'amarillo', hex: 'yellow', valor: 4, multiplicador: 10000 },
 { nombre: 'verde', hex: 'green', valor: 5, multiplicador: 100000 },
 { nombre: 'azul', hex: 'blue', valor: 6, multiplicador: 1000000 },
 { nombre: 'violeta', hex: 'purple', valor: 7, multiplicador: 10000000 },
 { nombre: 'gris', hex: 'gray', valor: 8, multiplicador: 100000000 },
 { nombre: 'blanco', hex: 'white', valor: 9, multiplicador: 1000000000 }
 ];

 tolerancias: Tolerancia[] = [
 { nombre: 'Dorado', hex: 'gold', valor: 0.05 },
 { nombre: 'Plata', hex: 'silver', valor: 0.10 }
 ];

 coloresSeleccionados = {
 banda1: null as Color | null,
 banda2: null as Color | null,
 banda3: null as Color | null
 };
toleranciaSeleccionada: Tolerancia | null = null;

valorResistencia: number | null = null;
 resistenciaMaxima: number | null = null;
resistenciaMinima: number | null = null;

mensajeError: string | null = null;

seleccionarColor(banda: 'banda1' | 'banda2' | 'banda3', color: Color) { this.coloresSeleccionados[banda] = color;
 }
 seleccionarTolerancia(tolerancia: Tolerancia) {
 this.toleranciaSeleccionada = tolerancia;
 this.mensajeError = null;
 }
 calcular() {
const { banda1, banda2, banda3 } = this.coloresSeleccionados;

if (banda1 && banda2 && banda3 && this.toleranciaSeleccionada) {

 const resultado = ResistenciaFormula.calcular(banda1, banda2, banda3, this.toleranciaSeleccionada);
 this.valorResistencia = resultado.valorResistencia;
 this.resistenciaMaxima = resultado.resistenciaMaxima;
this.resistenciaMinima = resultado.resistenciaMinima;
 this.mensajeError = null;
} else {

 this.valorResistencia = null;
this.resistenciaMaxima = null;
 this.resistenciaMinima = null;
 this.mensajeError = "no nos haga perder el tiempo y seleccione toda la informacion";
 }
 }
}
