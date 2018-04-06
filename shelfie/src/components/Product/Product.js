import React from 'react';

import './Product.css'

function Product ( props ) {
    const { product } = props;

    return (
        <div className="product-details">
            <img src={ product.img } alt="product"/>
            <h2>{ product.name }</h2>
            <h3>Price: { product.price }</h3>

        </div>
    )
}

export default Product;