import React, { Component } from 'react';
import BancoDeDados from '../bd/BancoDeDados';

// Vamos usar a nova Context API 
// 1. Primeiro a gente cria o contexto
// Um contexto armazena um objeto value
export const LojaContext = React.createContext();

// 2. Depois a gente cria um provider
// Um provider injeta um value em um context
// 
// Esse componente serve apenas para colocar um valor em um contexto, e passar
// esses valores para os componentes filhos.
export class LojaProvider extends Component {
  state = {
    produtos: BancoDeDados.getProdutos(),
    carrinho: [],
    carrinhoVisivel: false
  };  

  render() {
    return (
      <LojaContext.Provider value={{
          state: this.state,
          buscar: (termo) => {
            let produtos = BancoDeDados.getProdutos().filter((p) => {
              return p.nome.toLowerCase().includes(termo.toLowerCase());
            });
            this.setState({produtos});
          },
          comprar: (produto) => {
            let carrinho = [...this.state.carrinho, produto];
            this.setState({carrinho});
          },
          remover: (indice) => {
            let carrinho = [...this.state.carrinho];
            carrinho.splice(indice, 1);
            this.setState({carrinho});
          },
          mostrarCarrinho: () => {
            this.setState({carrinhoVisivel: true});
          },
          esconderCarrinho: () => {
            this.setState({carrinhoVisivel: false});
          }
      }}>
        {this.props.children}
      </LojaContext.Provider>
    );
  }
}
