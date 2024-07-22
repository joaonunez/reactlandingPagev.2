import React from "react";
import NavItem from "./subcomponents/NavItem"
import navItems from "../scripts/nav/navitems";

export function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid contenedornav">
        <a className="navbar-brand logo" href="https://www.youtube.com">
          Café Planta
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navItems.map((item)=>(
              <NavItem key={item.id} title={item.title}></NavItem>
            ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
