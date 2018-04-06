import React, { Component } from 'react';


class Form extends Component{
    constructor() {
        super();
        this.state = {
            imageUrl: '',
            productName: '',
            price: null
        }
    }

    handleUserInput( e ) {
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
            imageUrl: '',
            productName: '',
            price: null
        })
    }


    render() {
        const { imageUrl, productName, price } = this.state
        return (
            <div>
                <p>Image URL</p>
                <input name="image_url" onChange={ e => this.handleImage( e.target.value ) } value={ imageUrl }/>
                <p>Product Name</p>
                <input name="product_name" onChange={ e => this.handleName( e.target.value ) } value={ productName }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handlePrice( e.target.value ) } value={ price }/>
                <div className="button-box">
                    <button onClick={ this.clearAll }>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;