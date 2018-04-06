import React, { Component } from 'react';
import axios from 'axios';

const productUrl = '/api/product'


class Form extends Component{
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            productName: '',
            price: 0
        }
    }

    componentDidUpdate() {
        this.props.getInventory();
    }

    handleImage( e ) {
        this.setState({
            imageUrl: e
        })
    }

    handleName( e ) {
        this.setState({
            productName: e
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

        axios.post(productUrl, {name: name, img: img, price: price}).then( res => {
            this.setState({
                name: '',
                img: '',
                price: 0
            })
        })
    }


    render() {
        const { imageUrl, productName, price } = this.state
        return (
            <div>
                <p>Image URL</p>
                <input name="img" onChange={ e => this.handleImage( e.target.value ) } value={ imageUrl }/>
                <p>Product Name</p>
                <input name="name" onChange={ e => this.handleName( e.target.value ) } value={ productName }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handlePrice( e.target.value ) } value={ price }/>
                <div className="button-box">
                    <button onClick={ () => this.clearAll() }>Cancel</button>
                    <button onClick={ () => this.addProduct }>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;