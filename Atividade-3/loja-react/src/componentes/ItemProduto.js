import React, { useContext } from 'react';
import {LojaContext} from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ItemProduto(props) {
  let { comprar } = useContext(LojaContext);

  return (
    <Col xs={3}>
      <Card className="text-center">
        <Card.Header as="h5">{props.produto.nome}</Card.Header>
        <Card.Img variant="top" src={props.produto.foto} />
        <Card.Body>
          <Card.Title><FormataMoeda valor={props.produto.preco}/></Card.Title>
          <Button variant="outline-primary" block onClick={() => comprar(props.produto)}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemProduto;