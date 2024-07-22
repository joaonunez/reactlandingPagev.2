import React from "react";
import cafeImage from "../images/taza-de-cafe.png";

export function MainContent() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <img
        className="d-block mx-auto mb-4"
        src={cafeImage}
        alt=""
        width="140"
        height="150"
      />
      <h1 className="display-5 fw-bold text-body-emphasis">
        Los Mejores Cafés Del Sector
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Descubre la mejor selección de cafés en nuestro establecimiento. Desde
          mezclas ricas y aromáticas hasta tostados especiales, ofrecemos una
          experiencia premium en café. Disfruta de nuestras bebidas
          meticulosamente preparadas, diseñadas para deleitar a cada aficionado
          al café. Únete a nosotros en el disfrute del arte de hacer café, donde
          la calidad se encuentra con la pasión.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            Ver Productos
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            Ver Elaboración
          </button>
        </div>
      </div>
    </div>
  );
}
