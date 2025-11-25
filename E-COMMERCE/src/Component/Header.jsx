import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import Bottomheader from "./Bottomheader";
export default function Header() {
  const [showprofile, hideprofile] = useState(false);
  function profilemodal(){
      hideprofile(!showprofile);
  }
  return (
    <>
    <header style={{ borderbottom : "1px solid #eee8e8"}} className="header-section py-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div className="first-sec">
              <div className="header-logo">
                <img src={logo} alt="" />
              </div>
              <div className="header-search">
               <input type="text" placeholder="search for products" />
               <a href="">Search</a>
              </div>
              
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-center gap-5 justify-content-center">
            <div className="header-icon ">
                <div className="icon-1  ">
                    <FaRegHeart  size={27} />
                    <span className="ms-1">Wishlist</span>
                      <span className="wishlist-count">10</span>
                </div>
                 
            </div>
               <div className="header-icon ">
               
                  <div className="icon-1  ">
                  
                    <IoCartOutline size={27} />
                    <span className="ms-1">Cart</span>
                      <span className="wishlist-count">5</span>
                </div>
            </div>
              <div className="header-icon ">
               
                  <div className="icon-1  ">
                  
                    <VscAccount  size={21} />
                    <span className="ms-1" onClick={profilemodal}>Account</span>
                      {/* <span className="wishlist-count">5</span> */}
                </div>

              <div className={showprofile ? "account-section": "hide-account"}>
                  <p>Login</p>
                  <p>Signup</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <Bottomheader/>
    </>
  );
}
