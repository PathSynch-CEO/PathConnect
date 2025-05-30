import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const jobOpenings = [
  {
    role: "Front-end Designer",
    location: "Sydney, Australia",
    type: "Full-time",
  },
  { role: "Lead Designer", location: "San Francisco, USA", type: "Full-time" },
  { role: "Head Of Idea", location: "Berlin, Germany", type: "Part-time" },
  { role: "Front-end Designer", location: "Tokyo, Japan", type: "Full-time" },
  { role: "Head Of Idea", location: "Oslo, Norway", type: "Part-time" },
  { role: "Front-end Designer", location: "Paris, France", type: "Full-time" },
  {
    role: "Front-end Designer",
    location: "Brisbane, Australia",
    type: "Full-time",
  },
  { role: "Front-end Designer", location: "Madrid, Spain", type: "Full-time" },
];

const Careers = () => {
  return (
    <div className="bg-green">
      <Header />

      <div className="carrer-titles careers-section">
      <h2 className="section-title">Careers</h2>
        <p className="section-description">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium
          <p >
          lorem impsu remque laudantium, totam re veritat.
        </p>
        </p>
      </div>
      <div className="careers-section">
       
       
        <h3 className="openings-title">Our Openings</h3>
        <div className="openings-grid">
          {jobOpenings.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-header">
                <h4>{job.role}</h4>
                <span className="job-type">{job.type}</span>
              </div>
              <p className="job-location">{job.location}</p>
              <div className="link-wrap">
                {" "}
                <a href="#" className="apply-link">
                  View & Apply
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className="load-more">Load More</button>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
