import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Button from 'react-bootstrap/Button';
import styles from './ItemCarrinho.css';

class ItemCarrinho extends Component {
  render() {
    return (
      <tr>
        <td><img className={styles.carrinho_img} src={this.props.produto.imagem} alt="" /></td>
        <td>{this.props.produto.nome}</td>
        <td><FormataMoeda valor={this.props.produto.preco}/></td>
        <td>
          <Button variant="danger" onClick={() => this.context.remover(this.props.index)}>
            Remover
          </Button>
        </td>
      </tr>
    );
  }
}

ItemCarrinho.contextType = LojaContext;

export default ItemCarrinho;