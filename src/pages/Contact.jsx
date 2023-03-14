import React from "react";

const Contact = () => {
  return (
    <>
      {/* ====== Contact Section Start ====== */}
      <section className="contact" id="contact">
        <article>
          <h3>Have You Any Question</h3>
          <h4>I'M AT YOUR SERVICES</h4>
          {/* ====== Contact info item start ======= */}
          <main>
            <div className="contact-details padd-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call Us On</h4>
              <p>+91 7979871968</p>
            </div>
            <div className="contact-details padd-15">
              <div className="icon">
                <i className="fa fa-map-marker-alt"></i>
              </div>
              <h4>Location</h4>
              <p>Delhi</p>
            </div>
            <div className="contact-details padd-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>gauravgunjan200301@gmail.com</p>
            </div>
            <div className="contact-details padd-15">
              <div className="icon">
                <i className="fa fa-globe-europe"></i>
              </div>
              <h4>Website</h4>
              <p>https://gauravgunjan.netlify.app/</p>
            </div>
          </main>
          {/* ====== Contact info item End ======= */}
          <h3>SEND ME AN EMAIL</h3>
          <h4>I'M VERY RESPONSIVE TO MESSAGES</h4>
        </article>
      </section>
      {/* ======== Contact Form ====== */}
    </>
  );
};

export default Contact;
