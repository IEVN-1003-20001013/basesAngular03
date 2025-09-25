import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  total: number = 0;
  mensaje: string = '';

  procesar() {
    const nombre = (document.getElementById("nombre") as HTMLInputElement).value;
    const compradores = +((document.getElementById("compradores") as HTMLInputElement).value);
    const boletos = +((document.getElementById("boletos") as HTMLInputElement).value);
    const tarjeta = (document.querySelector('input[name="tarjeta"]:checked') as HTMLInputElement)?.value;

    const precioBoleto = 12;
    const maxBoletos = compradores * 7;

    if (!nombre || isNaN(compradores) || isNaN(boletos) || boletos <= 0) {
      this.total = 0;
      this.mensaje = "Ingresa los datos, seriamente.";
      return;
    }

    if (boletos > maxBoletos) {
      this.total = 0;
      this.mensaje = `No autorizado: el numero maximo es:  ${maxBoletos} de boletos y ahi ${compradores} numeros de compradores.`;
      return;
    }

    let subtotal = boletos * precioBoleto;


    if (boletos > 5) {
      subtotal = subtotal * 0.85;
    } else if (boletos >= 3) {
      subtotal = subtotal * 0.90;
    }


    if (tarjeta === "si") {
      subtotal = subtotal * 0.90;
    }

    this.total = subtotal;
  }

  salir() {
    this.total = 0;
    this.mensaje = "Cerrando app.";
  }
}
