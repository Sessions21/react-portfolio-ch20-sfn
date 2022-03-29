import React, {useState} from "react";
import photoRing from "../../../assets/images_project/ring-builder.png";
import photoSahp from "../../../assets/images_project/sahm-schedular.png";
import photoRun from "../../../assets/images_project/run-buddy.png";
import photoRead from "../../../assets/images_project/readme.png";
import photoSocial from "../../../assets/images_project/social-network.png";
import photoEcomm from "../../../assets/images_project/e-commerce-backend.png";

function Project() {

  const [projects, setProjects] = useState([
    {
      name: "Ring Builder",
      description:"Build customized rings step-by-step, choosing from an assortment of unique stones and band designs.",
      website: 'https://ring-builder-app.herokuapp.com/',
      github: 'https://github.com/Sessions21/Ring-Builder_Project-2',
      image: photoRing
    },
    {
      name: "SAHP Schedular",
      description:"A family scheduling app that allows you to input a daily schedule, print directions to appointments, and check current and upcoming weather.",
      website: 'https://sessions21.github.io/Project1-SAHM-Calendar/',
      github: 'https://github.com/Sessions21/Project1-SAHM-Calendar.git',
      image: photoSahp
    },
    {
      name: "Run Buddy",
      description:"A fitness app that connects you with trainers, and provides instructions for getting your running workout strategy organized.",
      website: 'https://sessions21.github.io/run-buddy/',
      github: 'https://github.com/Sessions21/run-buddy',
      image: photoRun
    },
    {
      name: "ReadME.md Generator",
      description:"This application takes users through a list of questions and outputs a well sytled customized ReadME.md file for attachment to any web design project.",
      website: 'https://www.awesomescreenshot.com/video/6682095?key=25c21447b5c06c71e25ccb7d34887590',
      github: 'https://github.com/Sessions21/ReadME-Generator',
      image: photoRead
    },
    {
      name: "Social Network API",
      description:"This node.js based RESTful API can be used by web based social networking application to create, read, update, and delete users. It also provides the same functionality to do the same with personal thoughts users wish to share online. It provides the functionality to create friend groups, share thoughts on any topic with this group of friends, and post reactions to other friend's thoughts. It uses MongoDB for the backend storage, and uses Mongoose and Express.js to organize and route the data to the frontend.",
      website: 'https://www.awesomescreenshot.com/video/7752931?key=7f9aab91a0fb340ffcdd685b3393817b',
      github: 'https://github.com/Sessions21/social-network-API-Ch18-sfn',
      image: photoSocial
    },
    {
      name: "E-Commerce Backend",
      description:"This is a build out e-commerse backend database to organize and access retail products. The products are organized with descriptions, categories and tags. New products can be added and deleted. Existing products can be updated.",
      website: 'https://www.awesomescreenshot.com/video/7415448?key=5a023f682cfd5ddaa402679993e21548',
      github: 'https://github.com/Sessions21/e-commerce-backend_Ch13_sfn',
      image: photoEcomm
    }
  ]);

  return (
    <section>
      {projects.map((project) => (
        <div className="project" key={project.name}>
          <h2>{ project.name }</h2>
          <p>{ project.description }</p>
          <a href={ project.website }>Visit Site</a>
          <a href={ project.github }>GitHub Repo</a>
          <div className="flex-row">
            <img
              src={project.image}
              alt="project thumbnail"
              className="img-thumbnail mx-1"
            />
          </div>
        </div>

      ))}
    </section>
  );
}

export default Project;