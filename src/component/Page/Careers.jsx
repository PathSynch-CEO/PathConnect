import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Careers = () => {
  return (
    <div className="bg-green">
      <Header />

      {/* Embedded external site */}
      <div className="careers-embed">
        <iframe
          src="https://studio-4912983619-12bc4.web.app/"
          style={{
            width: "100%",
            height: "100vh",   // full screen height
            border: "none",
          }}
          title="Careers Page"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Careers;