import CarouselComponent from './CarouselComponent.js'
import ProductCard from './ProductCard.js'
import './Home.css'
import CarouselComponent3 from './CarouselComponent3.js'
import logo from './images/logo.png'
import logo3 from './images/logo3.png'
import growthLogo from './images/growth.jpeg';
import { useState } from 'react'
import Form from './Form.js'
import ScrollToTopButton from './ScrollToTopButton.js'

export default function Home() {

    const[curr,setCurr] = useState(1);

    const nextSlide = () => {
        setCurr((prevCurr)=> (prevCurr+1))
    }
    
    const prevSlide = () => {
        setCurr((prevCurr)=> (prevCurr-1))
    }
    
    const func = (val) => {

        if(val%8==0){
            val = 8;
        }
        else if(val>8){
            val = val%8;
        }
        else if(val<0){
            val = Math.abs(val);
            val = val%8;
            val = 8 - val;
        }

        console.log(val);


        return val;
    }

    return (
        <>
            
            {/* <div className='carousel'>
                <CarouselComponent3 />
            </div>
             <div className='about row'>
                <h2>About Us</h2>
                <div className='aboutText col'>
                    <p>At <b>Global Sales Corporation</b>, we import premium plastic raw materials to meet global industry needs with excellence and sustainability.</p>
                    <p>Our strong supply network ensures timely delivery of cost-effective, high-quality solutions tailored to client goals.</p>
                    <p>We stand out with our expertise and focus on building lasting, trustworthy relationships rooted in quality.</p>
                    <p>Partner with us for reliable service, innovative solutions, and a sustainable future. Contact us today.</p>
                </div>
                <div className='aboutLogo col'>
                    <img src={logo3} alt='...'/>
                </div>
            </div>
            
            <div id='products' className='products'>
                <div className='productHeading'>
                    <h2>Our Products</h2>
                </div>
                <div className='row'>

                <div className='cards col'>
                <button onClick={prevSlide} className='leftBtn col'>❮</button>
                <div><ProductCard id={func(curr)}/></div>
                <div><ProductCard id={func(curr+1)}/></div>
                <div><ProductCard id={func(curr+2)}/></div>
                <div><ProductCard id={func(curr+3)}/></div>
                <button onClick={nextSlide} className='rightBtn col'>❯</button>
                </div>
                </div>
            </div>
            <div className='vision'>
                <h1>Why Choose Us?</h1>
                <div className='visionText row'>
                    <img src={growthLogo} alt='...' className='col'/>
                    <div className='visionText2 col'>
                        <p>At <b>Global Sales Corporation</b>, we deliver premium plastic raw materials with a focus on quality and reliability.</p>
                        <p>Our global reach and local expertise ensure seamless operations and tailored solutions.</p>
                        <p>We offer eco-conscious products that balance performance and sustainability.</p>
                        <p>Choose <b>Global Sales Corporation</b> for innovative services and long-term partnerships.</p>
                    </div>
                </div>
            </div> 
             <a href="#" class="back-to-top d-flex align-items-center justify-content-center active"><i class="bi bi-arrow-up-short"></i></a> */}
            
             {/* <Form/> */}
        </>
    )
}