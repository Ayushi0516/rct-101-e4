import React,{useState,useEffect}from "react";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios"

import {
  addItemToCart,
  removeItemFromCart,
  updateCartItem,
} from "../../../store/cart/cart.actions";

const Product = () => {

//   const [pro, setPro] = useState([]);
//   useEffect(() => {
//     axios.get("http://localhost:8080/products").then((r) => {
//       setPro(r.data);
//     });
//   }, []);


//   const id = null;
  return (
// <>
// {pro.map((pro)=>{
//    <div
//    key={pro.id}
//    style={{
//      padding: "10px",
//      margin: "auto",
//      marginTop: "10px",
//      border: "1px solid grey",
//      maxWidth: "200px",
//    }}
//  >
//    <div>{pro.title}</div>
//    <div>{pro.description}</div>
//  </div>
// })}

    <div data-cy={`product-${id}`}>
      <h3 data-cy="product-name">name</h3>
      <h6 data-cy="product-description">description</h6>
      <button data-cy="product-add-item-to-cart-button"></button>
      <div>
        <button data-cy="product-increment-cart-item-count-button"></button>
        <span data-cy="product-count"></span>
        <button data-cy="product-decrement-cart-item-count-button"></button>
        <button data-cy="product-remove-cart-item-button"></button>
      </div>
    </div>
    
  );
};

export default Product;
