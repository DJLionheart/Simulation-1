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

    handleUserInput( name, e ) {
        switch( name ) {
            case 'image_url':
                this.setState({
                    imageUrl: e
                });
                break;
            
            case 'product_name':
                this.setState({
                    productName: e
                });
        }
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


    render() {
        const { imageUrl, productName, price } = this.state
        return (
            <div>
                <p>Image URL</p>
                <input name="image_url" onChange={ e => this.handleImage( e.target.value ) } value={ imageUrl }/>
                <p>Product Name</p>
                <input name="product_name" onChange={ e => this.handleName( e.target.value ) } value={ productName }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handleImage( e.target.value ) } value={ imageUrl }/>
                <div className="button-box">
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;