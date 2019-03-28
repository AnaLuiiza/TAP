const descompactar = require('descompactar-zip')

function extrairZip(origem, output) {
    extract(origem, { dir: output }, (err) => {
        console.log(err);
    })
}

module.exports = extrairZip;