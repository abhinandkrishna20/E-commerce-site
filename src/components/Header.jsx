import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
    
            <nav className="navbar navbar-expand-sm navbar-dark purple p-3">
                <div className="container-fluid">
                
                    <a className="navbar-brand" href="#"><i className='fa fa-shopping-bag'></i> Shabi.com</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><i className='fa fa-home'></i> Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/mycart"><i className='fa fa-shopping-cart'></i> My cart</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/login"><i className='fa fa-lock'></i> Login</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/register"><i className='fa fa-user-plus'></i> Register</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" to="/addproduct"><i className='fa fa-plus'></i> Addproduct</Link>
                            </li>
                        </ul>
                        <form class="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button"><i className='fa fa-search'></i> </button>
      </form>
                    </div>
                </div>
            </nav>
        
    );
}
export default Header;