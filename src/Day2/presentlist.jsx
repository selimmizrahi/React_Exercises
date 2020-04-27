import React from "react";
import Userlist from "./list";


function PresentList(props) {
  return (
    <ul className="list-to-present">
      {Userlist.map(el => (
        <li className="list-item" key={el.id}>
          <div>{el.first_name}</div>
          <div>{el.email}</div>
          <div>{el.country}</div>
        </li>
      ))}
    </ul>
  );
}

export default PresentList