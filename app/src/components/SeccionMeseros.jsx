import React from "react";
import Mesero from "./subcomponents/Meseros";
import meseros from "../scripts/cards/meseros";
export function SeccionMeseros() {
  return (
    <>
      <div className="m-auto text-center col-8 col-xxl-12">
        <h2>En Nuestro Café Nunca Cobramos Propinas...</h2>
        <h6>Por Lo Que Acontinuacion Puedes Dejar Las Propinas Voluntariamente A Través De La Plataforma</h6>
      </div>
      <div className="mt-5 mb-5 d-flex justify-content-center m-auto contenedor-meseros">
        {
          meseros.map((mesero)=>(
            <Mesero key={mesero.id + mesero.nombre} nombre={mesero.nombre} foto={mesero.foto}></Mesero>
          ))
        }
      </div>
    </>
  );
}
