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
     * 
     * @param integer numero: valor a ser formatado
     * @param integer n:      casas decimais
     * @param integer x:      tamanho da parte inteira
     * @param mixed   s:      delimitador de milhar
     * @param mixed   c:      delimitador decimal
    */
    static formataNumero(numero, n, x, s, c) {
      let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')';
      let num = numero.toFixed(Math.max(0, ~~n));
  
      return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
    };
}