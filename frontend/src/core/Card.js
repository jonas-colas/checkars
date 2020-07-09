import React from 'react';

const Card = ({car}) => {

	return (

		<div className="row p-2 bg-white border rounded remarc pointer">
      <div className="col-md-4 mt-1">
      	<img className="img-fluid img-responsive rounded product-image" src={car.imagenes[0].ruta} alt="Auto" />
      </div>
      <div className="col-md-5 mt-1">
        <h5>{car.titulo}</h5>
        <div className="d-flex flex-row">
        	<p className="text-justify text-truncate para mb-0">
        		<span className="text-info">{car.year} &nbsp;</span>
        		<span className="text-info badge badged">{car.kilometros} KM</span>
      		</p>
        </div>
        <div className="mt-1 mb-1 spec-1">
          <span>Combustible: {car.caracteristicas[5].valor},  
          	{car.caracteristicas[3].caracteristica} {car.caracteristicas[3].valor}
          </span>
        </div><br/>
        {/*<p className="text-justify text-truncate para mb-0">
          There  available.
        </p>*/}
      </div>
      <div className="align-items-center align-content-center col-md-3 border-left mt-1">
        <div className="d-flex flex-column ">
	      	<p className="pe mx-auto d-block" >Precio Presencial</p>
	        <span className="mx-auto d-block mart">{car.moneda}{car.precio}</span>
        </div>
        <div className="d-flex flex-column mt-1">
          <h6 className="mt-1 mx-auto d-block text-muted">Precio Online</h6>
          <h5 className="mx-auto d-block">{car.moneda}{car.precioonline}</h5>
          <button className="btn btn-primary btn-sm mt-2" type="button">CONSULTAR!</button>
        </div>
      </div>
    </div>
  );
};

export default Card;