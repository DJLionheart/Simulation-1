import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

const invUrl = '/api/inventory'




class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      selectedProduct: null
    }

    this.getInventory = this.getInventory.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
    this.clearSelected = this.clearSelected.bind(this);
  }
  
  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get(invUrl).then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  selectProduct( product ) {
    this.setState({
      selectedProduct: product
    })
  }

  clearSelected() {
    this.setState({
      selectedProduct: null
    })
  }

  render() {
    const { inventory, selectedProduct } = this.state;
    
    return (
      <HashRouter>
        <div>
          <Header clearSelected={ this.clearSelected }/>
          <Switch>
            <Route exact path='/' render={ (props) => <Dashboard inventory={ inventory } getInventory={ this.getInventory } selectProduct={ this.selectProduct } props={ props }/> } />
            <Route path='/form' render={ (props) => <Form getInventory={ this.getInventory } selectedProduct={ selectedProduct } clearSelected={ this.clearSelected } /> }/>
            <Route path='/form/:id' render={ (props) => <Form props={ props } getInventory={ this.getInventory }
            selectedProduct={ selectedProduct } clearSelected={ this.clearSelected }/> }/>       
          </Switch>
        </div>
      </HashRouter>

    );
  }
}
export default App;
