import React, { Component } from 'react';
import axios from 'axios';


import Product from '../Product/Product';


class Dashboard extends Component{
    constructor() {
        super();
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    getInventory() {
        this.props.getInventory();
    }

    deleteProduct( id ) {
        axios.delete(`/api/product/${ id }`).then( res => {
            this.getInventory()
        })

    }

    render() {
        
        const { inventory, selectProduct } = this.props;

        const products = inventory.map( (product, i) => {
            return(
                <div key={ i }>
                    <Product product={ product }
                    deleteProduct={ this.deleteProduct }
                    selectProduct={ selectProduct }/>
                </div>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                { products }
            </div>
        )
    }
}

export default Dashboard;