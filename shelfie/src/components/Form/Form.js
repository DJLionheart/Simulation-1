import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const productUrl = '/api/product'


class Form extends Component{
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            name: '',
            price: 0,
            productId: null,
            editProduct: false
        }
    }

    componentDidMount(props) {
        const { selectedProduct } = this.props;
        (selectedProduct !== null ) ? this.setState({
                img: selectedProduct.img,
                name: selectedProduct.name,
                price: selectedProduct.price,
                productId: selectedProduct.id,
                editProduct: true
            })
            : null
        
    }

    componentDidUpdate(prevProps) {
        const { selectedProduct } = this.props;
        if( prevProps.selectedProduct !== selectedProduct) {
        
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
            price: 0,
            editProduct: false
        })
        this.props.getInventory()
    }

    addProduct() {
        const { name, img, price } = this.state;
        
        axios.post(productUrl, {name: name, img: img, price: price}).then( res => {
            this.clearAll();
        })
    }

    saveChanges( id ) {
        const { name, img, price } = this.state;

        axios.put(`${productUrl}/${ id }`, {name: name, img: img, price: price}).then( res => {
            this.clearAll();
        })
    }


    render() {
        const { img, name, price, editProduct, productId } = this.state

        return (
            <div>
                <p>Image URL</p>
                <input name="img" onChange={ e => this.handleImage( e.target.value ) } value={ img }/>
                <p>Product Name</p>
                <input name="name" onChange={ e => this.handleName( e.target.value ) } value={ name }/>
                <p>Price</p>
                <input name="price" onChange={ e => this.handlePrice( e.target.value ) } value={ price }/>
                <div className="button-box">
                    <Link to='/'><button onClick={ () => this.clearAll() }>Cancel</button></Link>
                    {
                        editProduct
                            ? <Link to='/'><button onClick={ () => this.saveChanges( productId ) }>Save Changes</button></Link>
                            : <Link to='/'><button onClick={ () => this.addProduct() }>Add to Inventory</button></Link>
                    }
                </div>
            </div>
        )
    }
}

export default Form;