import React, { Component } from 'react';


import Product from '../Product/Product';


class Dashboard extends Component{
    render() {
        const { inventory } = this.props;

        const products = inventory.map( (product, i) => {
            return(
                <div key={ i }>
                    <Product product={ product }/>
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