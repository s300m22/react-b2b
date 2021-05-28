import React from 'react'
import { Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div>
                        <div className="sidebar" id="sidebar">
                            <div className="sidebar-inner slimscroll">
                                <div id="sidebar-menu" className="sidebar-menu">
                                    <ul>
                                        <li className="menu-title"> 
                                            <span>Main</span>
                                        </li>
                                        <li className="active"> 
                                            <Link to='/'>
                                                <i className="fe fe-home"></i> <span>Dashboard</span>
                                            </Link>
                                        </li>
                                        
                                      
                                        <li className="submenu">
                                            <a href="#"><i className="fe fe-document"></i> <span> Users</span> <span className="menu-arrow"></span></a>
                                            <ul style={{ display: 'none' }}>
                                                
                                                <li><Link to='/alluser'>All Users</Link></li>
                                                <li><Link to='/addnew'>Add New</Link></li>
                                               
                                            </ul>
                                        </li>
                                       
                                      
                                        <li className="submenu">
                                        <a href="#">
                                            <i className="fe fe-document"></i> <span> Products</span> <span className="menu-arrow"></span>
                                            </a>
                                            <ul style={{ display: 'none' }}>

                                                <li><Link to="/product/allproduct"> All Products </Link></li>
                                                <li><Link to="/product/addnew"> Add New </Link></li>
                                                <li><Link to="/options/add-options"> Options </Link></li>
                                                
                                            </ul>

                                        </li>

                                        <li className="submenu">
                                            <a href="#"><i className="fe fe-vector"></i> <span> Settings </span> <span className="menu-arrow"></span></a>
                                            <ul style={{ display: 'none' }}>
                                            <li><Link to="/vat/allvat"> All Vats </Link></li>
                                            <li><Link to="/vat/addnew">  Add New </Link></li>
                                            </ul>
                                        </li>

                                        <li className="submenu">
                                            <a href="#"><i className="fe fe-vector"></i> <span> Customer</span> <span className="menu-arrow"></span></a>
                                            <ul style={{ display: 'none' }}>
                                            <li><Link to="/customer/all-customeres"> All Customeres </Link></li>
                                            <li><Link to="/customer/add-customer">  Add New </Link></li>
                                            </ul>
                                        </li>
                                       
                                     
                                     
                                 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                
                   
        </div>
       
    )
}

export default SideBar
