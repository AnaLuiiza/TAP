import React, { Component } from 'react';
import {LojaProvider} from '../context/LojaContext';
import BarraDeBusca from './BarraDeBusca';
import ListaDeProdutos from './ListaDeProdutos';
import CarrinhoDeCompras from './CarrinhoDeCompras';
import login from './login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';  

class Loja extends Component {
  <BrowserRouter>
   <Switch>
     <Route path="../context/LojaContext" exact component={LojaProvider}/>
     <Route path="/BarraDeBusca" exact component={BarraDeBusca}/>
     <Route path="/login" exact component={login}/>
     <Route path="/ListaDeProdutos" exact component={ListaDeProdutos}/>
     <Route path="/CarrinhoDeCompras" exact Component={CarrinhoDeCompras}/>
   </Switch>
  </BrowserRouter>
  

export default Loja;