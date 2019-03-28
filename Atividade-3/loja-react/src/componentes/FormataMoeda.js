import Toolkit from '../util/Toolkit';

function FormataMoeda(props) {
    return 'R$ ' + Toolkit.formataNumero({numero: props.valor});
}

export default FormataMoeda;