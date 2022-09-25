import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
const Product = (props) => {
  console.log(props);
  const {name,img,ratings,seller,price}=props.product;
  return (
    <div className='product'>
      <img src={img} alt="product" />
      <div className='product-info'>
      <p className='product-name'>{name}</p>
      <p className='product-price'>Price:${price}</p>
      <p>Manufacturer:{seller}</p>
      <p>Rating:{ratings}</p>
      </div>
      <button className='btn-cart' onClick={()=>props.handleAddToCart(props.product)}> 
      <p className='btn-carttext'>add to cart</p>
      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
      
      
    </div>
  );
};

export default Product;