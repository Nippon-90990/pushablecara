import Link from 'next/link'
import Script from 'next/script';
import React from 'react'
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  return (
    <header className='header sticky bg-headerc shadow-2xl rounded-b-full font-bold'>
      <div className='container'>
        <div className='row v-center'>
          <div class='header-item item-left'>
            <div className='logo'>
              <Link className='cusimg m-0 h-10' href={'/'}>BitLoom</Link>
            </div>
          </div>
        </div>

        <div className='header-item item-center'>
          <div className='menu-overlay'>  {/* I DONT KNOW THIS CLASS WORKS OR NOT BUT I APPLY FOR ONOTHER REASON.   */}
            <nav className='menu'>
              <div className='mobile-menu-head'>
                {/* <div className="go-back"><i className="fa fa-angle-left" /></div>
                <div className="current-menu-title"></div>
                <div className="mobile-menu-close"></div> */}
              </div>

              <ul className='menu-main'>
                <li ><Link className='font-bold' href={'#'}>Home</Link></li>
                <li className="menu-item-has-children"><Link href={'#'}>New <i className="fa fa-angle-down" /></Link>
                <div className="sub-menu mega-menu mega-menu-column-4">
                  <div className="list-item text-center">
                    <Link href={'#'}>
                      <img src="/p1.jpg" alt="new Product" />
                      <h4 className="title">Product 1</h4>
                    </Link>
                  </div>

                  <div className="list-item text-center">
                    <Link href={'#'}>
                      <img src="/p2.jpg" alt="new Product" />
                      <h4 className="title">Product 2</h4>
                    </Link>
                  </div>

                  <div className="list-item text-center">
                    <Link href={'#'}>
                      <img src="/p3.jpg" alt="new Product" />
                      <h4 className="title">Product 3</h4>
                    </Link>
                  </div>

                  <div className="list-item text-center">
                    <Link href={'#'}>
                      <img src="/p4.jpg" alt="new Product" />
                      <h4 className="title">Product 4</h4>
                    </Link>
                  </div>

                </div>
                </li>

                <li className="menu-item-has-children">
                <Link href={'#'}>Shop</Link>
                <div className="sub-menu mega-menu mega-menu-column-4">
                <div className="list-item">
                <h4 className="title">Men's Fashion</h4>
                  <ul>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                  </ul>

                <h4 className='title'>Beauty</h4>
                  <ul>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                  </ul>
                </div>

                <div className="list-item">
                  <h4 className="title">Women's Fashion</h4>
                  <ul>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                  </ul>
                  <h4 className="title">Furniture</h4>
                  <ul>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                  </ul>
                </div>

                <div className='list-item'>
                  <h4 className="title">Home, Kitchen</h4>
                  <ul>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                    <li><Link href={'#'}>Product List</Link></li>
                  </ul>
                </div>

                <div className="list-item">
                  <img src="/shop1.jpg" alt="shop" />
                </div>
                </div>
                </li>

                <li className='menu-item-has-children'>
                <Link href={'#'}>Blog </Link>
                <div className='sub-menu single-column-menu'>
                <ul>
                  <li><Link href={'#'}>Standard Layout</Link></li>
                  <li><Link href={'#'}>Grid Layout</Link></li>
                  <li><Link href={'#'}>single Post Layout</Link></li>
                 </ul>
                </div>
                </li>

                <li className='menu-item-has-children'>
                <li className='cursor-pointer'>Account</li>
                <div className='sub-menu single-column-menu'>
                <ul>
                  <li><Link href={'#'}>Login</Link></li>
                  <li><Link href={'#'}>Register</Link></li>
                  {/* <li><Link href={'#'}>Faq</Link></li> */}
                  {/* <li><Link href={'#'}>404 Page</Link></li> */}
                 </ul>
                </div>
                </li>

              <li>
                <Link href={'/contact-us'} className='font-bold'>Contact Us</Link>
              </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header-item item-right">
          <Link href={'#'}><AiOutlineSearch className='cusb text-2xl'/></Link>
          <Link href={'#'}><AiOutlineHeart className='cusb text-2xl' /></Link>
          <Link href={'#'}><AiOutlineShoppingCart className='cusb text-2xl' /></Link>
          <div className='mobile-menu-trigger'>
            <span/>
          </div>
        </div>
      </div>
      <Script src='/script.js'></Script>
    </header>
  )
}

export default Header