// ContactPage.js
import React from "react";
import "./ContactPage.css"; // Import the CSS file for styling

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* <h1>Contact Us</h1> */}
      <p className="description">
        Welcome to SHOPPER – Your Ultimate Fashion Destination for the Whole
        Family! At SHOPPER, we're thrilled to bring you a curated collection of
        the latest trends and timeless classics for men, women, and kids. Step
        into a world of style, comfort, and affordability as you explore our
        diverse range of clothing that caters to every age and occasion.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p>
          <strong>Location:</strong> 123 Main Street, Cityville, Country
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
