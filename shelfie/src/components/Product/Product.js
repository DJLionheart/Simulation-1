import React from 'react';

import './Product.css'

function Product ( props ) {
    const { product, deleteProduct, selectProduct } = props;

    return (
        <div className="product-details">
            <img src={ product.img } alt="product"/>
            <h2>{ product.name }</h2>
            <h3>Price: { product.price }</h3>
            <button onClick={ () => deleteProduct( product.id )}>Delete</button>
            <button onClick={ () => selectProduct( product )}>Edit</button>

        </div>
    )
}

export default Product;