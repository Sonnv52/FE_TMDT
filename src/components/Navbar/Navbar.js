import React from 'react'
import "../Navbar/Navbar.css"
export default function Navbar() {
    return (
        <div>
        <nav>
        <div class="navbar-container">
          <a href="#" class="logo">My Logo</a>
          <ul class="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/signin">About</a></li>
            <li><a href="/map">List</a></li>
            <li>
                <form class="search-form">
                  <input type="text" placeholder="Search"></input>
                  <button type="submit"><i class="fa fa-search"></i></button>
                </form>
              </li>
            <li><a href="/login">Account</a></li>
          </ul>
          <div class="cart-container">
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span class="cart-count">0</span>
            </a>
          </div>
        </div>
        <div class="burger-container">
          <div class="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      </div>
    )
}