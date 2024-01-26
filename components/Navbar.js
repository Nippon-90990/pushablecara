import Link from 'next/link'
import React from 'react'
import { FaSearch,FaHeart,FaOpencart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-pink-0 shadow-xl bg-bgcus header font-bold'>
      <div className='container'>
        <div className='row v-center'>
        <div class="header-item item-left">
          <div class="logo">
            <Link href={'/'}>BitLoom</Link>
          </div>
 			  </div>
        {/* <!-- menu start here --> */}
          <div className='header-item item-center'>
            <div className='menu-overlay'></div>
            <nav className='menu'>
              <div class="mobile-menu-head">
                <div class="go-back"></div>
                <div class="current-menu-title"></div>
                <div class="mobile-menu-close">&times;</div>
              </div>
              <ul class="menu-main">
 						{/* <li>
 							<a href="#">Home</a>
 						</li> */}
 						<li class="menu-item-has-children">
 							<a href="#">New <i class="fa fa-angle-down"></i></a>
 							<div class="sub-menu mega-menu mega-menu-column-4">
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="/p1.jpg" alt="new Product"/>
 									<h4 class="title">Product 1</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="/p2.jpg" alt="new Product"/>
 									<h4 class="title">Product 2</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="/p3.jpg" alt="new Product"/>
 									<h4 class="title">Product 3</h4>
 									</a>
 								</div>
 								<div class="list-item text-center">
 									<a href="#">
 									<img src="/p4.jpg" alt="new Product"/>
 									<h4 class="title">Product 4</h4>
 								   </a>
 								</div>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">Shop <i class="fa fa-angle-down"></i></a>
 							<div class="sub-menu mega-menu mega-menu-column-4">
                               <div class="list-item">
                               	  <h4 class="title">Men's Fashion</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 class="title">Beauty</h4>
                               	  <ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	<h4 class="title">Women's Fashion</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               	  <h4 class="title">Furniture</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	<h4 class="title">Home, Kitchen</h4>
                               	<ul>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  	 <li><a href="#">Product List</a></li>
                               	  </ul>
                               </div>
                               <div class="list-item">
                               	 <img src="/shop1.jpg" alt="shop"/>
                               </div>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">Blog <i class="fas fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Standard Layout</a></li>
 									<li><a href="#">Grid Layout</a></li>
 									<li><a href="#">single Post Layout</a></li>
 								</ul>
 							</div>
 						</li>
 						<li class="menu-item-has-children">
 							<a href="#">Acounts <i class="fas fa-angle-down"></i></a>
 							<div class="sub-menu single-column-menu">
 								<ul>
 									<li><a href="#">Login</a></li>
 									<li><a href="#">Register</a></li>
 									{/* <li><a href="#">Faq</a></li>
 									<li><a href="#">404 Page</a></li> */}
 								</ul>
 							</div>
 						</li>
 						<li>
 							<a href="#">Contact</a>
 						</li>
 					</ul>
            </nav>
          </div>
		  <div class="header-item item-right">
 				<a href="#"><FaSearch className='text-2xl' /></a>
 				<a href="#"><FaHeart className='text-2xl' /></a>
 				<a href="#"><FaOpencart className='text-2xl' /></a>
 				{/* <!-- mobile menu trigger --> */}
 				<div class="mobile-menu-trigger">
 					<span></span>
 				</div>
 			</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar