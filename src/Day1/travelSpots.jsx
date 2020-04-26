import React from "react";

function Travel(props) {
  return (
    <li className="user-item">
    <br/>
      <img className="user-image" src={props.image} alt={props.name} />
      <br/>
      <br/>
      <span>{props.name}</span>
      <br/>
      <br/>
      <a href={props.location}>Click here for Google Maps</a>
    </li>
  );
}

export default Travel;
