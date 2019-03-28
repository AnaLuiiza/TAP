import React, { Component } from 'react';
import { LojaContext } from '../context/LojaContext';
import Button from 'react-bootstrap/Button';
import styles from './login.css';

class login extends Component {
  render() {
    return (
      <tr>
        <Navbar bg="light" fixed="top">
        <Navbar.Brand>Nome</Navbar.Brand>
         </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <React.Fragment>
              <Form inline>
                <FormControl type="text" placeholder="Nome" className="mr-sm-2" 
                  onChange={(event) => this.context.nome(event.target.value)} />
              </Form>
              </React.Fragment>
              </Navbar.Collapse>
              <Navbar bg="light" fixed="top">
          <Navbar.Brand>Nome</Navbar.Brand>
          </Navbar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <React.Fragment>
              <Form inline>
                <FormControl type="text" placeholder="Senha" className="mr-sm-2" 
                  onChange={(event) => this.context.senha(event.target.value)} />
              </Form>
          <Button variant="danger" onClick={() => this.context.entrar(this.props.index)}>
            Entrar
          </Button>
          </React.Fragment>
          </Navbar.Collapse>
      </tr>
    );
  }
}

ItemCarrinho.contextType = LojaContext;

export default login;