import React, {useState} from 'react';

const CheckboxOne = ({combustible, handleFilters}) => { 

	const [checkup, setCheckup] = useState([]);

	const handleChange = t => (event) => { 
		 //return the first index or -1
		const currentCaracteristica = checkup.indexOf(t);
		const newCheckedCaracteristica = [...checkup];

		//if currently checkup was not already in checkup state > push
		//else pull/take off
		if(currentCaracteristica === -1){
			newCheckedCaracteristica.push(t);
		}else{
			newCheckedCaracteristica.splice(currentCaracteristica, 1);
		}
		//console.log(newCheckedCaracteristica);
		setCheckup(newCheckedCaracteristica);
		handleFilters(newCheckedCaracteristica);
		
	};

	
	return combustible.map((c, i) => (
		
		<label key={i} className="form-check">
      <input onChange={handleChange(c.caracteristica)} value={checkup.indexOf(c.caracteristica === -1)}
       className="form-check-input" type="checkbox" />
      <span className="form-check-label"> {c.caracteristica} ({c.total}) </span>
    </label> 
	));
};

export default CheckboxOne;