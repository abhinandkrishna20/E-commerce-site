import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Addproduct from "./Addproduct";
import Productcard from "./Productcard";
import axios from "axios";

const Home = () => {
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
  },[1]);
  const [msg,updatItem] = useState("");
  const addTocart =(productInfo) =>{
axios.post("http://localhost:1234/cartitem/",productInfo)
.then(response =>{
  updatItem("Item added successfully");

})
  }

  return (
    <>
      <Header />
      {/* <h2><Link exact path='/addproduct' element={<Addproduct />}> AddProduct</Link> </h2> */}
      <div className="container-fluid height600 text-center sea rounded">
        <h1 className="text-success p-4">Shabi's Aquarium </h1>
        <h3 className="text-primary">{msg}</h3>
        <div className="row">
          {productlist.map((product, index) => {
            return (
              <div className="col-lg-3" key={index}>
                <h4 className="text-primary">{product.name}</h4>
                <img
                  src={product.photo}
                  className="img-fluid rounded fish"
                  alt="beta fish"
                />
                <p>{product.desc}</p>
                <p className="text-center">Rs.
                  {/* <del className="text-danger"> Rs.600/per pice</del> */}
                  <ins className="success">{product.price}</ins>
                </p>
                <button className="btn btn-primary" onClick={addTocart.bind(this, product)}>
                  <i className="fa fa-plus"></i> Add to Cart
                </button>
              </div>
            );
          })}
        {/* <Productcard /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
