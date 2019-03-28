import { Component } from 'react';
import Toolkit from '../util/Toolkit';

class FormataMoeda extends Component {
    render() {
        return 'R$ ' + Toolkit.formataNumero(this.props.valor, 2, 3, '.', ',');
    }
}

export default FormataMoeda;