import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about">
        <article>
          <main>
            <div className="personal-details padd-15">
              <main>
                <p>
                  Birthday : <span>20 Mar 2001</span>
                </p>
                <p>
                  Age : <span>21</span>
                </p>
                <p>
                  Website : <span>https://gunjangaurav.netlify.app/</span>
                </p>
                <p>
                  Email : <span>gauravgunjan200301@gmail.com</span>
                </p>
                <p>
                  Degree : <span>B-Tech</span>
                </p>
                <p>
                  Phone : <span>7979871968</span>
                </p>
                <p>
                  City : <span>Muzaffarpur</span>
                </p>
                <p>
                  Freelance : <span>Available</span>
                </p>
              </main>
              <main>
                <div className="buttons padd-15">
                  <Link href="" className="btn">
                    Download CV
                  </Link>
                  <Link to="/contact" className=" btn hire-me">
                    Hire Me
                  </Link>
                </div>
              </main>
            </div>

            <div className="skills padd-15">
              <div className="skills-item">
                <h5>HTML</h5>
                <div className="progress">
                  <div className="progress-in" style={{width:'90%'}}></div>
                  <div className="skill-percent">90%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>CSS</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '85%'}}></div>
                  <div className="skill-percent">85%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>javaScript</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '90%'}}></div>
                  <div className="skill-percent">90%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>SQL</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '82%'}}></div>
                  <div className="skill-percent">82%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>MongoDB</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '80%'}}></div>
                  <div className="skill-percent">80%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>React.js</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '60%'}}></div>
                  <div className="skill-percent">60%</div>
                </div>
              </div>
              <div className="skills-item">
                <h5>Node.JS</h5>
                <div className="progress">
                  <div className="progress-in" style={{width: '70%'}}></div>
                  <div className="skill-percent">70%</div>
                </div>
              </div>
            </div>
          </main>

          <main>
            <div className="education padd-15">
              <h3>Education</h3>
              <div className="timeline">
                <div className="timeline-item padd-15">
                  <div className="circle-dot"></div>
                  <div className="icon">
                    <i className="fa fa-calendar"></i> 2018-2022
                  </div>
                  <h4>Bachelor in Technology</h4>
                  <p>Motihari college of Engineering, Motihari, Bihar</p>
                  <p>8.4 CGPA</p>
                </div>
                <div className="timeline-item padd-15">
                  <div className="circle-dot"></div>
                  <div className="icon">
                    <i className="fa fa-calendar"></i> 2016-2018
                  </div>
                  <h4>Intermediate</h4>
                  <p>
                    Sushant public school, Nunfara piar, Muzaffarapur, Bihar
                  </p>
                  <p>72.4%</p>
                </div>
                <div className="timeline-item padd-15">
                  <div className="circle-dot"></div>
                  <div className="icon">
                    <i className="fa fa-calendar"></i> 2015-2016
                  </div>
                  <h4>Matriculation</h4>
                  <p>DAV public school, Malighat, Muzaffarapur, Bihar</p>
                  <p>9.6 CGPA</p>
                </div>
              </div>
            </div>

            <div className="experience padd-15">
              <h3>Experience</h3>
              <div className="timeline">
                <div className="timeline-item padd-15">
                  <div className="circle-dot"></div>
                  <div className="icon">
                    <i className="fa fa-calendar"></i> 2022
                  </div>
                  <h4>On job training</h4>
                  <p>QSpider, Noida</p>
                </div>
              </div>
            </div>
          </main>
        </article>
      </section>
    </>
  );
};

export default About;
