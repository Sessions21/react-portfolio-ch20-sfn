import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images_project/ring-builder.png";

function Project(props) {
  const currentProject = {
    name: "Ring Builder",
    description: "Build customized rings step-by-step, choosing from an assortment of unique stones and band designs.",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentProject.name)}</h1>
      <p>{currentProject.description}</p>
      <div className="flex-row">
          <img
            src={photo}
            alt="project thumbnail"
            className="img-thumbnail mx-1"
          />
      </div>
    </section>
  );
}
export default Project;