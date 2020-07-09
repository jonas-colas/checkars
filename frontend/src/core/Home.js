import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import CheckboxOne from './CheckboxOne';
import CheckboxTwo from './CheckboxTwo';
import data from '../data';
import Card from './Card';

const Shop = () => {
  const [myFilters, setMyFilters] = useState({
    filters: {combustible: [], transmision: []}
  });
  const [transmision, setTransmision] = useState([]);
  const [combustible, setCombustible] = useState([]);
  const [cars, setCars] = useState([]);
  
  const fetchTransmision = () => {
    setTransmision(data.legends.transmision);
  }
  
  const fetchCombustible = () => {
    setCombustible(data.legends.combustible);
  }

  const fetchCars = () => {
    setCars(data.docs); //.caracteristicas
  }

  const loadFilters = newFilters => {
    
  };

  useEffect(() => {

    fetchTransmision();
    fetchCombustible();
    fetchCars();
  }, []);

  const handleFilters = (filters, filterBy) => {
    
    const newFilters = {...myFilters};
    newFilters.filters[filterBy] = filters;

    loadFilters(myFilters.filters);

    setMyFilters(newFilters);
  };

  if(myFilters.filters['combustible'].length === 0 && myFilters.filters['transmision'].length === 0 ){ 
  	return (
  		<Layout title="titulo Page" description="Search and find car" className="">
  			<div className="container mt-4 mb-4">
  				<div className="d-flex justify-content-center row">
  				  <div className="col-md-3">
  				  	<div className="card ">
                <article className="card-group-item">
                  <header className="card-header">
                    <h4 className="title">Filtros </h4>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <h4 className="title">Combustible </h4>
                       
                      <CheckboxOne combustible={combustible} handleFilters={filters => 
                        handleFilters(filters, 'combustible')} />

                    </div> 
                  </div>
                </article>
                
                <article className="card-group-item">
                	<hr/>
                  <div className="filter-content">
                    <div className="card-body">
                  		<h4 className="title">Transmisíon</h4>
                     
                        <CheckboxTwo transmision={transmision} handleFilters={filters => 
                        handleFilters(filters, 'transmision')} />
                       
                    </div>
                  </div>
                </article> 
              
              </div>
  				  </div>
            
  				  <div className="col-md-9 col-sm-12">

              {cars.map((car, i) => (<Card key={i} car={car}  /> ))} 

  				  </div>
  			  </div>
  			</div>
  		</Layout>
  	);
  }else{
    return (
      <Layout title="titulo Page" description="Search and find car" className="">
        <div className="container mt-4 mb-4">
          <div className="d-flex justify-content-center row">
            <div className="col-md-3">
              <div className="card">
                <article className="card-group-item">
                  <header className="card-header">
                    <h4 className="title">Filtros </h4>
                  </header>
                  <div className="filter-content">
                    <div className="card-body">
                      <h4 className="title">Combustible </h4>
                       
                      <CheckboxOne combustible={combustible} handleFilters={filters => 
                        handleFilters(filters, 'combustible')} />

                    </div> 
                  </div>
                </article>
                
                <article className="card-group-item">
                  <hr/>
                  <div className="filter-content">
                    <div className="card-body">
                      <h4 className="title">Transmisíon</h4>
                     
                        <CheckboxTwo transmision={transmision} handleFilters={filters => 
                        handleFilters(filters, 'transmision')} />
                       
                    </div>
                  </div>
                </article> 
              
              </div>
            </div>
            
            <div className="col-md-9 col-sm-12">
              {cars.map((car, i) => (

                  (car.caracteristicas[5].valor === myFilters.filters['combustible'][0]
                      || car.caracteristicas[5].valor === myFilters.filters['combustible'][1]
                      || car.caracteristicas[3].valor === myFilters.filters['transmision'][0]
                      || car.caracteristicas[3].valor === myFilters.filters['transmision'][1]) ? 

                  ( <Card key={i} car={car} /> ) : ('')
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Shop;