import React, { Component } from 'react';
import axios from 'axios';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

import './App.css';

const serverUrl = 'localhost:4025/api/inventory'




class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }
  
  // {name: 'Final Fantasy XV', price: 50, image: 'https://i.kinja-img.com/gawker-media/image/upload/s--SORcqjsv--/c_scale,fl_progressive,q_80,w_800/ypsop1lmmnqxvhrms2zo.png'},
  // {name: 'Skyrim: Special Edition', price: 40, image: 'https://cdn3.dualshockers.com/wp-content/uploads/2016/06/TESV_SE_COVER_ART_1465781950Crop.jpg'	},
  // {name: 'Ni No Kuni II', price: 55, image: 'http://twinfinite.net/wp-content/uploads/2017/01/ni-no-kuni-2-1.jpg'}
  componentDidMount() {
    axios.get(serverUrl).then( res => {
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
