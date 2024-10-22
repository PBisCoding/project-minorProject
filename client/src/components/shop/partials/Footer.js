import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              styele={{width :"600",
              height:"450",
              frameBorder:"0",
              style:"border:0;",
              allowFullScreen:"",
              tabIndex:"0"}}
            />
      <footer
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        <p> <b> About Us : </b> Welcome to our Interior E-commerce Site, where we bring your dream living spaces to life. With a passion for design and a commitment to providing exceptional products and services, we are dedicated to transforming houses into homes. <br /> Develop & Design Muskan © Copyright {moment().format("YYYY")}</p> 
      </footer>
    </Fragment>
  );
};

export default Footer;
