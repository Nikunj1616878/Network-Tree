import './Footer.css'
import logo from './images/logo.png'
import MapEmbed from './MapEmbed.js'
// import React, { useRef } from "react";

// import playStore from '../../../images/playstore.png'
// import appStore from '../../../images/Appstore.png';

export default function Footer() {
//     const contactSectionRef = useRef(null);

//   const handleScrollToContact = () => {
//     if (contactSectionRef.current) {
//       // Scroll into view
//       contactSectionRef.current.scrollIntoView({ behavior: "smooth" });

//       // Add highlight class
//       contactSectionRef.current.classList.add("contact-highlight");

//       // Remove highlight class after 1 second
//       setTimeout(() => {
//         contactSectionRef.current.classList.remove("contact-highlight");
//       }, 1000);
//     }
//   };
    return(
        <footer className='footer row'>
        <div id='contacts' className='leftFooter col'>
            <h2>Contact Us</h2>
                <a className="mailBtn" href="mailto:gruhshobhacr87@gmail.com">
                <i class="bi bi-envelope"></i>&nbsp; gruhshobhacr@gmail.com
                </a>
                
                <a className="phnBtn" href="tel:+91 932-825-9110"><i className="bi bi-phone"> &nbsp;+91 932-825-9110 </i></a>
                
                <a className="mapBtn"><i class="bi bi-geo-alt"></i>&nbsp;
                151, Shree Mahavir Market, Near Textile Tower, Ring Road, Surat, Gujarat 395001(India)
                </a>
            {/* <img src={playStore} alt='playstore' />
            <img src={appStore} alt='AppStore' /> */}
        </div>
        <div className='logo midFooter col'>
            <img src={logo} alt='...'/>
            <h3> Global Sales Corporation </h3>
            {/* <p> Think Plastic Think GSC. afsdfasdfasdfasdfsdfasdfsadfsadfs</p> */}
        </div>
        <div className='rightFooter col'>
            <h2>Follow Us</h2>

            <a href='http://instagram.com/mishkainternational'><i class="bi bi-instagram"></i>&nbsp; Instagram</a>
            <a href='http://instagram.com/mishkainternational'><i class="bi bi-facebook"></i>&nbsp; Facebook</a>
            <a href='http://instagram.com/mishkainternational'><i class="bi bi-linkedin"></i>&nbsp; LinkedIn</a>
        </div>
       </footer>
    )
}
