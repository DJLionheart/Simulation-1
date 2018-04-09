import React from 'react';
import { Link } from 'react-router-dom';

import placeholder from './placeholder.png';

import './Product.css'

function Product ( props ) {
    const { product, deleteProduct, selectProduct } = props;

    return (
        <div className="product-box">
            {
                ( product.img )
                    ? <img src={ product.img } alt="product"/>
                    : <img src={ placeholder } alt="placeholder"/>
            }
            <div className="product-details">
                <h2>{ product.name }</h2>
                <h3>Price: ${ product.price }</h3>
                <div className="btn-box">
                    <button onClick={ () => deleteProduct( product.id )}>Delete</button>
                    <Link to={`/form/${ product.id }`}><button onClick={ () => selectProduct( product )}>Edit</button></Link>
            </div>
                </div>
        </div>
    )
}

export default Product;