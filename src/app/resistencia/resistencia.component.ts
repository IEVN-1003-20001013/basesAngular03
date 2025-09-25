import { Component } from '@angular/core';
import { Comment } from '@angular/compiler';

interface Color {
  nombre: string;
  hex: string;
  valor: number;
  multiplicador: number;
}

interface Tolerancia {
  nombre: string;
  hex: string;
  valor: number;
}

@Component({
  selector: 'app-resistencia',
  standalone: false,
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
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

  coloresSeleccionados: { banda1: Color | null, banda2: Color | null, banda3: Color | null } = {
    banda1: null,
    banda2: null,
    banda3: null
  };
  toleranciaSeleccionada: Tolerancia | null = null;

  valorResistencia: number | null = null;
  resistenciaMaxima: number | null = null;
  resistenciaMinima: number | null = null;

  seleccionarColor(banda: 'banda1' | 'banda2' | 'banda3', color: Color): void {
    this.coloresSeleccionados[banda] = color;
    this.calcular();
  }

  seleccionarTolerancia(tolerancia: Tolerancia): void {
    this.toleranciaSeleccionada = tolerancia;
    this.calcular();
  }

  calcular(): void {
    const { banda1, banda2, banda3 } = this.coloresSeleccionados;
    if (banda1 && banda2 && banda3 && this.toleranciaSeleccionada) {
      const valorBase = parseInt(`${banda1.valor}${banda2.valor}`, 10);
      this.valorResistencia = valorBase * banda3.multiplicador;
      const valorTolerancia = this.valorResistencia * this.toleranciaSeleccionada.valor;
      this.resistenciaMaxima = this.valorResistencia + valorTolerancia;
      this.resistenciaMinima = this.valorResistencia - valorTolerancia;
    } else {
      this.valorResistencia = null;
      this.resistenciaMaxima = null;
      this.resistenciaMinima = null;
    }
  }
}
