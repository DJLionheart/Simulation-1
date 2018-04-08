import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css'

function Product ( props ) {
    const { product, deleteProduct, selectProduct } = props;

    return (
        <div className="product-details">
            <img src={ product.img } alt="product"/>
            <h2>{ product.name }</h2>
            <h3>Price: { product.price }</h3>
            <button onClick={ () => deleteProduct( product.id )}>Delete</button>
            <Link to={`/form/${ product.id }`}><button onClick={ () => selectProduct( product )}>Edit</button></Link>
        </div>
    )
}

export default Product;