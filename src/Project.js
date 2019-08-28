import React from 'react';

function Project({ image, title, link }) {
  return(
    <div>
      <img src={image} width="300" height="300" alt="" />
      <h3> {title}</h3>
      <a href={link}>Link to project</a>
    </div>
  )
}

export default Project;