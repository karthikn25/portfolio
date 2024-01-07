import React from "react";
import img3 from "../images/skills.jpg";
import img4 from "../images/technicalskills.jpg";

export default function Skills() {
  return (
    <section className="skills">
      <div className="container">
        <div className="row">
          <div
            className="section-title padd-15"
            style={{ textAlign: "center" }}
          >
            <h2>NonTech-Skills</h2>
          </div>
        </div>
        <div className="skills padd-15">
          <div className="row">
            <div className="skill padd-15">
              <div className="row">
                <div className="skill-item padd-15">
                  <h5>Time Management</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "90%" }}>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="time-management"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Leadership</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "80%" }}>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="leadership"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Team Work</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "85%" }}>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="teamwork"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Planning Ability</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "80%" }}>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="planning-ability"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Strategic Thinking </h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "88%" }}>
                      <div className="skill-percent">88%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="strategic-thinking"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Communication Skill</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "78%" }}>
                      <div className="skill-percent">78%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="communication-skill"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Dedication</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "90%" }}>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="dedication"></span>
                </div>
              </div>
            </div>
            <div className="personal-info padd-15">
              <div className="row">
                <div
                  className="about-img1"
                  
                >
                  <img src={img3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills padd-15">
          <div className="row">
            <div
              className="section-title padd-15"
              style={{ textAlign: "center" }}
            >
              <h2>Tech-Skills</h2>
            </div>
          </div>
          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                <div className="about-img2">
                  <img src={img4} alt="" />
                </div>
              </div>
            </div>
            <div className="skill padd-15" id="tech-skill">
              <div className="row">
                <div className="skill-item padd-15">
                  <h5>HTML</h5>
                  <div className="progress">
                    <div className="progress-in " style={{ width: "92%" }}>
                      <div className="skill-percent">92%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="html"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>CSS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "85%" }}>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="css"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>BOOTSTRAP</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "87%" }}>
                      <div className="skill-percent">87%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="bootstrap"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>JAVASCRIPT</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "80%" }}>
                      <div className="skill-percent">80%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="javascript"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>REACTJS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "88%" }}>
                      <div className="skill-percent">88%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="reactjs"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>SQL</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "85%" }}>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="sql"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>MONGODB</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "76%" }}>
                      <div className="skill-percent">85%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="mongodb"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>NODEJS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "70%" }}>
                      <div className="skill-percent">70%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="nodejs"></span>
                </div>
                <div className="skill-item padd-15">
                  <h5>Figma</h5>
                  <div className="progress">
                    <div className="progress-in" style={{ width: "90%" }}>
                      <div className="skill-percent">90%</div>
                    </div>
                  </div>
                </div>
                <div className="bar">
                  <span className="figma"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
