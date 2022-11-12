import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Addproduct = () => {
  return (
    <>
      <Header />
      <div className="container text-center">
        <div className="h1">
          <h1>Add the Products</h1>
        </div>
        <div className="row">
          <div className="col-md-4 offser-4 text-center">
            <form action="/" method="POST">
              <div className="border rounded">
                <div className="m-2 text-start">
                  <label className="form-label">Item</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the Item"
                  />
                </div>
                <div className="m-2 text-start">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Price"
                  />
                </div>
                <div className="m-2 text-start">
                  <label className="form-label">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Product Description"
                  />
                </div>
                <div className="text-center p-2 m-2">
                  <button className="btn btn-lg btn-primary">Add Product</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Addproduct;
