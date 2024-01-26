import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='section-p1'>
        <div class="col">
            <span className='logo font-bold h-20 w-20'>BitLoom</span>
            {/* <img class="logo h-20 w-18" src="/Screenshot (2).png" alt=""/> */}
            <h4>Contact</h4>
            <p><strong>Address: </strong>562 Wellington Road, Street 32, San Francisco </p>
            <p><strong>Phone: </strong> +01 2222 365 / (+91) 01 2345 6789 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00 , Mon - Sat </p>
            <div class="follow">
                <h4>Follow us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy and Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sing In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Trac My Order</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From App Stor or Google Play Store</p>
            <div class="row">
                <img src="/app.jpg" alt=""/>
                <img src="/play.jpg" alt=""/>
            </div>
            <p>Secure Payment Gateway</p>
            <img src="/pay.png" alt=""/>
        </div>

        <div class="copyright">
            <p>All Right Reserved dsjKTGK"WLEsjmTKKopk"PKGPl rfpdls[]</p>
        </div>

    </footer>
  )
}

export default Footer