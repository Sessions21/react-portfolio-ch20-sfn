import React from 'react'
import ImageRes from '../../../assets/images_resume/resume.pdf';

const Resume = () => {
  return (
    <div>
      <article>
        <h1>Resume</h1>
        <h2>Scott F. Nichols <span><p>Web Designer</p></span></h2>
        <p> With over 12 years of IT experience immersed in all areas of the complex IBM business
            model, along with a mathematics and business education, and a breadth of leadership
            roles, I use my broad knowledgebase to provide innovative ideas and unique solutions.
            I consistently give a dedicated effort to complete any assigned tasks and always seek
            out ways to improve the state of the business. The uniqueness of my contributions
            involves the ability to both logically and creatively find thorough solutions to complex
            situations. Through maximizing efficiency, and a lead-by-example work ethic, I assist in
            maximizing the returns of any endeavor.
        </p>
        <br/>
        <h3>Education:</h3>
        <ul>
          <li>Full Stack Web Design Bootcamp - University of utah (A)</li>
          <li>Bachelor of Science in Mathematics - Mars Hill University (Cum Laude)</li>
          <li>Associates in Business and Finance - Salt Lake Community College (Cum Laude)</li>
        </ul>
        <br/>
        <h3>Skills:</h3>
        <ul>
          <li>Full Stack Web Design - HTML, CSS, JavaScript, JQuery, Node.js, MERN web design</li>
          <li>IBM Certified Systems Engineer - Power Systems, IBM Cloud, IBM Storage, ESS</li>
          <li>Competition Soccer Coach</li>
          <li>Public Speaker/Instructor</li>
        </ul>
        <a href={ImageRes} className= "button" download="resume.pdf"> Download Resume Here </a>
      </article>
    </div>
  )
}

export default Resume