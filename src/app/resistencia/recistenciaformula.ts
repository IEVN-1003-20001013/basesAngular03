// resistencia-formula.ts
export class ResistenciaFormula {
  static calcular(banda1: number, banda2: number, multiplicador: number, tolerancia: number) {
    const valorBase = parseInt(`${banda1}${banda2}`, 10);
    const valorResistencia = valorBase * multiplicador;
    const margen = valorResistencia * tolerancia;
    return {
      valorResistencia,
      resistenciaMinima: valorResistencia - margen,
      resistenciaMaxima: valorResistencia + margen
    };
  }
}
