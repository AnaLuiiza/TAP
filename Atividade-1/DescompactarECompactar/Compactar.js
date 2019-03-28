const fs = require('fs');
const archiver = require('archiver');


function compactador(origem, output) {
    let saida = fs.createWriteStream(output);
    let compactador = archiver('zip');

    saida.on('close', () => {
        console.log(compactador.pointer() + ' bytes totais');
    })
    compactador.pipe(saida);
    fs.readdir(origem, (err, arquivos) => {
        arquivos.forEach(item => {
            if (fs.statSync(origem + '/' + item + '/').isDirectory()) {
                var aux = origem + '/' + item + '/';
                compactador.directory(aux, item);
            } else {
                var arquivo = origem + '/' + item;
                compactador.append(fs.createReadStream(arquivo), { name: item });
            }
        });
    })
    compactador.finalize();
}

module.exports = compactador;