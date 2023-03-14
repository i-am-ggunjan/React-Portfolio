import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* ================Home Section Start================ */}
      <section className="home" id="home">
        <article>
          <main>
            <div className="home-details padd-15">
              <h3>
                Hello, my name is <span className="name">Gaurav Gunjan</span>
              </h3>
              <h4>
                I'm a <span className="typing">Mern Stack Developer</span>
              </h4>
              <p>
                Recently graduated in EEE @ Aryabhatta Knowledge University,
                Patna
                <br />
                Skills :- HTML | CSS | JavaScript | SQL | MongoDB | React.JS |
                Node.JS
              </p>
              {/* ==== button ==== */}
              <Link to="/contact" className="btn hire-me">
                Hire Me
              </Link>
            </div>

            <div className="home-img">
              <img src="image/pic1.jpg" alt="" />
            </div>
          </main>
        </article>
      </section>
      {/* =================Home Section End================= */}
    </>
  );
};

export default Home;
