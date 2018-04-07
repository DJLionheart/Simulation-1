import React, { Component } from 'react';
import axios from 'axios';

const productUrl = '/api/product'


class Form extends Component{
    constructor() {
        super();
        this.state = {
            img: '',
            name: '',
            price: 0
        }
    }

    // componentDidUpdate() {
    //     this.props.getInventory();
    // }

    handleImage( e ) {
        this.setState({
            img: e
        })
    }

    handleName( e ) {
        this.setState({
            name: e
        })
    }

    handlePrice( e ) {
        this.setState({
            price: e
        })
    }

    clearAll() {
        this.setState({
            name: '',
            img: '',
            price: 0
        })
    }

    addProduct() {
        const { name, img, price } = this.state;
        const productToSend = {name: name, img: img, price: price}
        console.log(productToSend);
        

        axios.post(productUrl, productToSend).then( res => {
            this.setState({
                name: '',
                img: '',
                price: 0
            })
        })
    }


    render() {
        // const { img, name, price } = this.state
        return (
            <div>
                <p>Image URL</p>
                <input name="img" onChange={ e => this.handleImage( e.target.value ) } value={ this.state.img }/>
                <p>Product Name</p>
                <input name="name" onChange={ e => this.handleName( e.target.value ) } value={ this.state.name }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handlePrice( e.target.value ) } value={ this.state.price }/>
                <div className="button-box">
                    <button onClick={ () => this.clearAll() }>Cancel</button>
                    <button onClick={ () => this.addProduct() }>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;