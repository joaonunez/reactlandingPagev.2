import React from "react";

const NavItem = (props) => {
  return (
    <li className="nav-item navitem" key={props.id}>
      <a
        className="nav-link active a-item"
        aria-current="page"
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </a>
    </li>
  );
};

export default NavItem;