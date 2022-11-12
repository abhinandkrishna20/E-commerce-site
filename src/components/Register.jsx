import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Register =()=>{
    return(
        <>
        <Header />
        <h3 className="text-primary text-center p-3">
        Register</h3>

        <div className="container-fluid height600">
        <div className="row">
         <div className="col-md-4 offset-4">
        <form action="/" method="POST">
        <div className="border rounded">
        <div className="m-2 text-start">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="Enter your full Name" />
        </div>
        <div className="m-2 text-start">
        <label className="form-label">Email</label>
        <input type="Email" className="form-control" placeholder="Enter your Email" />
        </div>
        <div className="m-2 text-start">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Enter your Password" />
        </div>
        <div className="text-center p-2 m-2">
        <button className="btn btn-lg btn-primary">Register</button>
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
export default Register;