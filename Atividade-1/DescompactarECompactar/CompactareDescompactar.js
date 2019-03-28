const fs = require('fs');
const compactador = require('./compactador');
const extractor = require('./descompactador');

var op = process.argv[2];
var origem = process.argv[3];
var output = process.argv[4];

if (fs.existsSync(output)) {
    fs.unlink(output, (err) => {
        if (err) throw err;
        console.log(output + ' DELETADO');
    });
}

if (op == 'compacta') {
    compactador(origem, output);
} else (op == 'descompacta') {
    extractor(origem, output);
}