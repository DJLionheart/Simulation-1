import React, { Component } from 'react';
import axios from 'axios';

const productUrl = '/api/product'


class Form extends Component{
    constructor() {
        super();
        this.state = {
            img: '',
            name: '',
            price: 0,
            productId: null,
            editProduct: false
        }
    }

    componentDidUpdate(prevProps) {
        if( prevProps.selectedProduct !== this.props.selectedProduct) {
            const { selectedProduct } = this.props;

            this.setState({
                img: selectedProduct.img,
                name: selectedProduct.name,
                price: selectedProduct.price,
                productId: selectedProduct.id,
                editProduct: true

            })
        }
        
    }

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
        
        axios.post(productUrl, {name: name, img: img, price: price}).then( res => {
            this.clearAll();
        })
    }


    render() {
        const { img, name, price, productId, editProduct } = this.state

        const condBtn = {
            saveBtn: {text: 'Save Changes', func: this.addProduct() },
            addBtn: {text: 'Add to Inventory', func: this.addProduct() }
        }

        let formBtn = {text: '', func: null}

        ( editProduct ) ? formBtn = condBtn.saveBtn : formBtn = condBtn.addBtn;

        return (
            <div>
                <p>Image URL</p>
                <input name="img" onChange={ e => this.handleImage( e.target.value ) } value={ img }/>
                <p>Product Name</p>
                <input name="name" onChange={ e => this.handleName( e.target.value ) } value={ name }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handlePrice( e.target.value ) } value={ price }/>
                <div className="button-box">
                    <button onClick={ () => this.clearAll() }>Cancel</button>
                    <button onClick={ () => formBtn.func() }>{ formBtn.text }</button>
                </div>
            </div>
        )
    }
}

export default Form;