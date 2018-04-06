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
      inventory: []
    }
  }
  
  componentDidMount() {
    axios.get(invUrl).then( res => {
      console.log(res);
      
      this.setState({
        inventory: res.data
      })
    })

  }

  render() {
    const { inventory } = this.state;
    return (
      <div>
        <Header />
        <Dashboard inventory={ inventory }/>
        <Form />
      </div>
    );
  }
}

export default App;
