import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useState,useEffect } from "react";

const Mycart =()=>{

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
  

    return(
        <>
        <Header />
        <div className="container mt-5 height600">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="text-center text-primary h1">My cart</h1>
                </div>
            </div>
        <div className="row mt-5">
            <div className="col-lg-4">
                <div className="card shadow m-2">
                    <div className="card-header shadow bg-primary text-center text-white  h3">Enter Customer Details</div>
                         <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="">Full Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="">Mobile no</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" >E-mail</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label >Delivery Address</label>
                        <input type="text" className="form-control" />
                    </div>
                     </div>
                     <div className="card-footer text-center bg-light">
                        <button className="btn btn-primary btn-lg">Place Order</button>
                     </div>
                     </div>
            </div>
            <div className="col-lg-8">
            <table className="table table-stried shadow">
            <thead>
                <tr className="bg-light text-primary">
                    <th>S.No</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Item</th>
                    <th>Action</th>
                 </tr>
                    {
                        productlist.map((product,index) =>{
                            return(
                                <tr className="bg-light text-dark">
                                <td>{index+1}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td><img src={product.photo} height="50" width="50" alt="" /> </td>
                                <td><i className="fa fa-trash text-danger"></i> </td>
                                </tr>
            
                            );
                        })
                    }

            </thead>
            </table>
            </div>
        </div>
        </div>
        
        <Footer />
        </>
    );
}
export default Mycart;