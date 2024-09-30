import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'; // Progress bar

function Skills() {
  const [showExperience, setShowExperience] = useState(true); // State to toggle between Experience and Education

  // Handler to toggle between Experience and Education
  const toggleSection = () => {
    setShowExperience(!showExperience);
  };

  return (
    <>
      <div className="row">
        <div style={{marginTop:"110px"}} className="col-lg-6 ">
          <h1 className="mt-5 ms-4 fw-bold text-black ">Skills & Experience</h1>
          <p className="ms-4">
            Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.
          </p>
          <h3 className="ms-4 mt-3 text-black fw-bold">My Skills</h3>
          <div className="skillsmainsection d-flex justify-content-between">
            <div className="skillfirstsection">
              {/* HTML */}
              <div className="skill1 d-flex justify-content-between mt-5 ms-3">
                <h3 className="fw-bold">HTML</h3>
                <h3 className="fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;95%</h3>
              </div>
              <div>
                <ProgressBar variant="success" now={95} />
              </div>
              {/* CSS */}
              <div className="skill1 d-flex justify-content-between mt-5 p-2">
                <h3 className="fw-bold">CSS</h3>
                <h3 className="fw-bold">85%</h3>
              </div>
              <div>
                <ProgressBar variant="info" now={85} />
              </div>
              {/* PHP */}
              <div className="skill1 d-flex justify-content-between mt-5">
                <h3 className="fw-bold">PHP</h3>
                <h3 className="fw-bold">90%</h3>
              </div>
              <div>
                <ProgressBar variant="danger" now={90} />
              </div>
            </div>

            <div className="skillssecondsection">
              {/* Javascript */}
              <div className="skill1 d-flex justify-content-between mt-5">
                <h3 className="fw-bold">Javascript</h3>
                <h3 className="fw-bold"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;90%</h3>
              </div>
              <div>
                <ProgressBar variant="danger" now={90} />
              </div>
              {/* Angular JS */}
              <div className="skill1 d-flex justify-content-between mt-5">
                <h3 className="fw-bold">Angular JS</h3>
                <h3 className="fw-bold">95%</h3>
              </div>
              <div>
                <ProgressBar variant="black" now={95} />
              </div>
              {/* Wordpress */}
              <div className="skill1 d-flex justify-content-between mt-5">
                <h3 className="fw-bold">Wordpress</h3>
                <h3 className="fw-bold">85%</h3>
              </div>
              <div>
                <ProgressBar variant="info" now={85} />
              </div>
            </div>
          </div>
        </div>

        {/* Experience and Education Section */}
        <div  className="col-lg-6 mt-5">
          <Button style={{marginTop:"110px"}} variant="primary" className="mb-4 ms-5" onClick={toggleSection}>
            {showExperience ? "Experience" : "Education"}
          </Button>

          {showExperience ? (
            // Experience Section
            <div className="experience-section d-flex justify-content-center justify-content-between">
              <ul type="none">
                <li>
                  <h3 className="fs-4 text-black">UI Designer</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Apex Software Inc
                  </h3>
                </li>
                <li>
                  <br />
                  <h3 className="fs-4 text-black">Web Designer</h3>
                  <h3 className="fs-4 text-black mt-3">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Apex Software Inc
                  </h3>
                </li>
              </ul>
              <ul type="none">
                <li>
                  <h3 className="fs-4 text-black">Product Designer</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Apex Software Inc
                  </h3>
                </li>
                <li>
                  <br />
                  <h3 className="fs-4 text-black">Apps Designer</h3>
                  <h3 className="fs-4 text-black mt-3">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Apex Software Inc
                  </h3>
                </li>
              </ul>
            </div>
          ) : (
            // Education Section
            <div className="education-section d-flex justify-content-center justify-content-between">
              <ul type="none">
                <li>
                  <h3 className="fs-4 text-black">UI Design Course</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Cambridge University
                  </h3>
                </li>
                <li>
                  <br />
                  <h3 className="fs-4 text-black">Web Design</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Cambridge University
                  </h3>
                </li>
              </ul>
              <ul type="none">
                <li>
                  <h3 className="fs-4 text-black">IOS Development</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Cambridge University
                  </h3>
                </li>
                <li>
                  <br />
                  <h3 className="fs-4 text-black">Apps Design</h3>
                  <br />
                  <h3 className="fs-4 text-black">
                    <span style={{ color: "darkblue" }}>2000 - 2045</span> <br />
                    Cambridge University
                  </h3>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Skills;

