export default class Toolkit {
  static splitArray(array, chunkSize) {
    let newArray = [];

    for (let i = 0; i < array.length; i += chunkSize) {
      newArray.push(array.slice(i, i + chunkSize));
    }

    return newArray;
  }

  /**
   * Método utilizado para formatar valores numéricos
   */
  static formataNumero({
    numero,
    casasDecimais = 2,
    casasInteiras = 3,
    delimitadorMilhar = ".",
    delimitadorDecimal = ","
  }) {
    let re =
      "\\d(?=(\\d{" +
      (casasInteiras || 3) +
      "})+" +
      (casasDecimais > 0 ? "\\D" : "$") +
      ")";
      
    let num = numero;

    try {
      num = numero.toFixed(Math.max(0, ~~casasDecimais));
    } catch (err) {}

    return (delimitadorDecimal
      ? num.replace(".", delimitadorDecimal)
      : num
    ).replace(new RegExp(re, "g"), "$&" + (delimitadorMilhar || ","));
  }
}
