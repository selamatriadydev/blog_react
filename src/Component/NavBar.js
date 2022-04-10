import React from "react"
import {Link} from "react-router-dom";

function NavBar(){
    const appname = "BlogMu";
    return(
        <>
        <nav className="navbar navbar-expand-lg main-navbar">
            <Link  to="/" className="navbar-brand sidebar-gone-hide">{ appname }</Link>
            <div className="navbar-nav">
            <Link  to="/" className="nav-link sidebar-gone-show" data-toggle="sidebar"><i className="fas fa-bars"></i></Link>
            </div>
            <div className="nav-collapse">
            <Link  to="/" className="sidebar-gone-show nav-collapse-toggle nav-link" >
                <i className="fas fa-ellipsis-v"></i>
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item "><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item "><Link to="blog" className="nav-link">Blog</Link></li>
                <li className="nav-item "><Link to="about" className="nav-link">About</Link></li>
            </ul>
            </div>
            {/* <form className="form-inline ml-auto">
                <ul className="navbar-nav">
                    <li><Link  to="/" data-toggle="search" className="nav-link nav-link-lg d-sm-none"><i className="fas fa-search"></i></Link></li>
                </ul>
                <div className="search-element">
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250"/>
                    <button className="btn" type="submit"><i className="fas fa-search"></i></button>
                    <div className="search-backdrop"></div>
                    <div className="search-result">
                        <div className="search-header">
                            Category
                        </div>
                            <div className="search-item">
                                <Link to={`blog/category/php`}>PHP</Link>
                                <Link to={`blog/category/php`}  className="search-close"><i className="fas fa-times"></i></Link>
                            </div>
                        <div className="search-header">
                            Tag
                        </div>
                        <div className="search-item">
                            <Link to={`blog/tag/php`}>
                                
                                PHP
                            </Link>
                        </div>
                    </div>
                </div>
            </form> */}
            {/* <ul className="navbar-nav navbar-right">
                <li className="nav-item"><Link to="blog" className="nav-link">Login</Link></li>
            </ul> */}
        </nav>

        <nav className="navbar navbar-secondary navbar-expand-lg">
            <div className="container">
            <ul className="navbar-nav">
                
                <li className="nav-item dropdown">
                <Link to="/" data-toggle="dropdown" className="nav-link has-dropdown"><span>Laravel</span></Link>
                <ul className="dropdown-menu">
                    <li className="nav-item"><Link to="/" className="nav-link">API</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">Laravel x React</Link></li>
                </ul>
                </li>
                
                <li className="nav-item">
                <Link to="/" className="nav-link"><span>E-book</span></Link>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;