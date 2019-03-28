import React, { useContext } from 'react';
import { LojaContext } from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Button from 'react-bootstrap/Button';
import styles from './ItemCarrinho.css';

function ItemCarrinho(props) {
  let { remover } = useContext(LojaContext);

  return (
    <tr>
      <td><img className={styles.carrinho_img} src={props.produto.foto} alt="" /></td>
      <td>{props.produto.nome}</td>
      <td><FormataMoeda valor={props.produto.preco}/></td>
      <td>
        <Button variant="danger" onClick={() => remover(props.index)}>
          Remover
        </Button>
      </td>
    </tr>
  );
}

export default ItemCarrinho;