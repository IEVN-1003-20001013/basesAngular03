import { Component } from '@angular/core';

@Component({
  selector: 'app-opera-bas',
  standalone: false,
  templateUrl: './opera-bas.component.html',
  styleUrl: './opera-bas.component.css'
})
export class OperaBasComponent {
  resultado: number = 0;

  calcular(op: string) {
    const nume1 = +((document.getElementById("nume1") as HTMLInputElement).value);
    const nume2 = +((document.getElementById("nume2") as HTMLInputElement).value);

    if (isNaN(nume1) || isNaN(nume2)) {
      this.resultado = 0;
      return;
    }

    if (op === 'sumatoria') this.resultado = nume1 + nume2;
    else if (op === 'restacion') this.resultado = nume1 - nume2;
    else if (op === 'multiplicacion') this.resultado = nume1 * nume2;
    else if (op === 'dividir') this.resultado = nume2 !== 0 ? nume1 / nume2 : 0;
  }
}
