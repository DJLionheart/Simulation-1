import React, { Component } from 'react';
import axios from 'axios';

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
      selectedProduct: {}
    }

    this.getInventory = this.getInventory.bind(this);
    this.selectProduct = this.selectProduct.bind(this);
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

  render() {
    const { inventory, selectedProduct } = this.state;
    
    return (
      <div>
        <Header />
        <Dashboard inventory={ inventory }
        getInventory={ this.getInventory }/>
        <Form getInventory={ this.getInventory }
        selectedProduct={ selectedProduct }/>
      </div>
    );
  }
}

export default App;
