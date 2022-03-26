import React from 'react';
import aboutImage from "../../../assets/cover/about-cover.png";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me...</h1>
      <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="desk with computer" />
    </section>
  );
}

export default About;