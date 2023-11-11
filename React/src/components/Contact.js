import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/Contact.css';
const Contact = () => {
  return (
    <div>
    <Header />
    <section className="py-3 py-md-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5">
            <img
              className="img-fluid rounded"
            //   loading="lazy"
              src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg"
              alt="About 1"
            />
          </div>
          <div className="col-12 col-lg-6 col-xl-7">
            <div className="row justify-content-center">
              <div className="col-12 col-xl-11">
                <h1 className="mb-3">Contact Us</h1>
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7835664152694!2d77.72459687385502!3d12.985690487330961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f1f0a793a3%3A0x10116e6e67cb31d9!2sMercedes-Benz%20Research%20%26%20Development%20India!5e0!3m2!1sen!2sin!4v1699247115279!5m2!1sen!2sin"
                  width="500"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <p className="lead fs-4 text-secondary mb-3">
                  Plot No. 5-P, 1, Whitefield Main Rd, near Satya Sai Baba Hospital, EPIP Zone, Hoodi, Bengaluru, Karnataka 560066
                </p>
                <p className="mb-5">
                  <i className="fa fa-phone" aria-hidden="true"></i>Phone Number : +91 8061506600 <br />
                  <i className="fa fa-window-restore" aria-hidden="true"></i>Website : <a href="http://mbrdi.co.in/">Mbrdi</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Contact;
