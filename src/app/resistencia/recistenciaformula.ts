export interface Color {
  nombre: string;
  hex: string;
  valor: number;
  multiplicador: number;
}

export interface Tolerancia {
  nombre: string;
  hex: string;
  valor: number;
}

export class ResistenciaFormula {
  static calcular(banda1: Color, banda2: Color, banda3: Color, tolerancia: Tolerancia) {
    const valorBase = parseInt(`${banda1.valor}${banda2.valor}`, 10);
    const valorResistencia = valorBase * banda3.multiplicador;
    const valorTolerancia = valorResistencia * tolerancia.valor;

    return {
      valorResistencia,
      resistenciaMaxima: valorResistencia + valorTolerancia,
      resistenciaMinima: valorResistencia - valorTolerancia
    };
  }
}


