import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Login =()=>{
    return(

        <>
        <Header />
        <h3 className="text-primary text-center p-3">
        Login</h3>

        <div className="container-fluid height600">
        <div className="row">
            <div className="col-md-4 offset-4">
        <form action="post">
        <div className="border rounded">
        <div className="m-2 text-start">
        <label className="form-label">Email</label>
        <input type="Email" className="form-control" placeholder="Enter your Email" />
        </div>
        <div className="m-2 text-start">
        <label className="form-label">Password</label>
        <input type="password" className="form-control" placeholder="Enter your Password" />
        </div>
        <div className=" col-md-6 offset-3 text-center ">
        <button className="btn  btn-primary p-2 m-2">Login</button>
        <button className="btn btn-secondary p-2 m-2">Reset</button>
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
export default Login;
