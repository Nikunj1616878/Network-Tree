import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <>
    <div id='contacts' className='formHeading'><h2>Contact Us</h2></div>
    <div className="contact-container">
      {/* <div className="contact-info">
        <div className="info-box">
        <div className="icon">📧</div>
        <div>
        <h4>Support Email</h4>
        <p>info@globalsalescorp.com</p>
        </div>
        </div>
        <div className="info-box">
        <div className="icon">📞</div>
        <div>
        <h4>Phone Number</h4>
        <p>+1 234-567-890</p>
        </div>
        </div>
        <div className="info-box">
        <div className="icon">📍</div>
        <div>
        <h4>Location</h4>
        <p>123 Business Street, City, Country</p>
        </div>
        </div>
        </div> */}
      <div className="contact-form">
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
          </div>
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button className='btn2'type="submit">Send Message</button>
        </form>
      </div>
    </div>
        </>
  );
};

export default Form;
