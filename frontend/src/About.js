import './About.css'
import logo from './images/logo3.png'
import logo2 from './images/history2.png'

export default function About() {
    return(
        <div className="page2">
            <div className='welcome row'>
                <div className='logo1 col'>
                    <img src={logo} alt='...'/>
                </div>
                <div className='text1 col'>
                    <h2>Welcome to GSC</h2>
                    <h6>Global Sales Corporation, a trusted name in the plastic raw material trade. We specialize in importing premium plastic raw materials from the US and Israel to cater to the growing demands of the Indian market.</h6>
                    <h6>Our streamlined operations ensure seamless supply chains, delivering quality and value to businesses across India. We prioritize customer satisfaction, timely delivery, and cost-effective solutions.</h6>
                </div>
            </div>
            <div className="history row">
                <div className='text2 col'>
                    <h2>Our Journey</h2>
                    <h6>Founded in 2023, Global Sales Corporation is a young enterprise that has already achieved significant milestones in the plastic raw materials industry. Starting operations from India, we have quickly established a strong foothold in the market, earning the trust of our clients with our dedication and expertise.</h6>
                    <h6>Our rapid growth is a testament to our commitment to quality, innovation, and customer satisfaction. As we continue to expand, we remain focused on providing exceptional solutions that help businesses thrive and set new benchmarks in the industry.</h6>
                </div>
                <div className='logo2 col'>
                    <img src={logo2} alt="..."/>
                </div>
            </div>
        </div>
    )
}