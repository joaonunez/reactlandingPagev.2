import React from "react";

const Mesero = (props) => {
  return (
    <div className="">
      <div
        key={props.id}
        className="card"
        style={{ width: "18rem" }}
      >
        <img src={props.foto} className="card-img-top foto" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nombre}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="www.google.com" className="btn btn-primary">
            Enviar Propina
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mesero;
