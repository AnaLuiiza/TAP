import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import ItemProduto from './ItemProduto';
import Toolkit from '../util/Toolkit';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const PRODUTOS_POR_LINHA = 4;

function ListaDeProdutos() {
  let { state: {produtos} } = useContext(LojaContext);

  let renderProduto = (linha, i) => {
    return (
      <Row key={i}>
        {linha.map((p, j) => (<ItemProduto produto={p} key={j}/>))}
      </Row>
    );
  }
  
  return (
    <Container>
      {Toolkit.splitArray(produtos, PRODUTOS_POR_LINHA).map(renderProduto)}
    </Container>
  );
}

export default ListaDeProdutos;