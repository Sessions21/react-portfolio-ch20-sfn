import React from 'react';
import aboutImage from "../../../assets/cover/about-cover.png";
import bodyImage from "../../../assets/cover/body_cover.JPG";


function About() {
  return (
    <section className='my-5'>
      <h1 id="about">About Me...</h1>
      <img src={bodyImage} className="img-thumbnail mx-1" alt="person looking off in the distance" />
      <p>With over 15 years of experience in a range of IT positions, with the majority of time spent as an IBM 
        Systems Engineer, my exploration into web design pulls from a 
        breadth of influences.  I have interfaced, and become extremely familiar with, countless complex  
        applications that run businesses and provide social intractions.
        My priorities in web design include logical symplicity with robust capabilities. I utilize
        the logic of a mathmatical mind and astethtics of a love of artcreation in all of my web design and 
        user interfaces. Ultimately, my websites incompass unique simplicity and high web visibilty.
        Let me design for you and show you what I mean!</p>
      <img src={aboutImage} className="my-2" style={{ width: "100%" }} alt="desk with computer" />
    </section>
  );
}

export default About;