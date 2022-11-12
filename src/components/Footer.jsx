import React from "react";
import { Link } from "react-router-dom";

const Footer =() =>{
    return(
    <>
<div className="container-fluid  dpurple text-light">
    <div className="row">
    <div className="col-lg-12 text-center">
    <h5>Shabi International P.Ltd</h5>
    <p>copyright © 2022</p>
    </div>
    <div className="col-md-4">
        <h5 className="text-start">About us </h5>
        <p className="h6"> 
            Shabi.com is Multi-Product selling and buying online platform. Anybody can doing your business with us. We provide user friend customer based business model.
            We mainly focus on custome main approch. Happy Busines!
        </p>
    </div>
    <div className="col-md-4">
        <h5 className="text-center">Quick Links </h5>
        <p className="text-center"> <Link to="/" className='text-white m-2 p-2'>Home</Link> 
        <Link to="/mycart" className='text-white m-2 p-2'>MyCart</Link>
         <Link to="/login" className='text-white m-2 p-2'>Login</Link>  </p>
    </div>
    <div className="col-md-4">
        <h5 className="text-end">Social media </h5>
        
        <p className="h4 text-end"> <i className="fa fa-facebook m-2 "></i>
        <i className="fa fa-instagram m-2 "></i>
         <i className="fa fa-twitter m-2 "></i></p>
        
    </div>

    

    </div>

</div>
</>);
}
export default Footer;