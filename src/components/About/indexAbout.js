import React from 'react';
import aboutImage from "../../assets/cover/sitting_cover.JPG";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me...</h1>
      <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;