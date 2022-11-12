import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Productcard = () => {
  const [productlist, updateProduct] = useState([]);
  const getProduct = () => {
    fetch("http://localhost:1234/product/")
      .then((response) => response.json())
      .then((productArray) => {
        updateProduct(productArray);
      });
  };
  useEffect(() => {
    getProduct();
  });

  return (
    <>
      
      <div className="text-center sea rounded">
        <h1 className="text-success p-4">New Arrivals</h1>
        <div className="row">
            <div className="col-lg-4">
            <div className="card d-flex">
          {
            productlist.map((product, index) => {
            return (
              <div  key={index}>
                <div className="card">
                <div className="card-header bg-danger">
                <h4 className="text-warning h3">{product.name}</h4></div>
                <div className="card-body">
                <img
                  src={product.photo}
                  className="img-fluid rounded fish"
                  alt="beta fish"
                />
                <p>{product.desc}</p>
                <p className="text-start">
                  {/* <del className="text-danger"> Rs.600/per pice</del> */}
                  <ins className="success">{product.price}</ins>
                </p>
                </div>
                <div className="card-footer">
                <button className="btn btn-primary" onClick={getProduct}>
                  <i className="fa fa-plus"></i> Add to Cart
                </button></div>
                 </div>
              </div>
              
            );
          })
          
          }
          </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
export default Productcard;
