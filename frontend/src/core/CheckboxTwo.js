import React, {useState} from 'react';

const CheckboxTwo = ({transmision, handleFilters}) => { 

	const [checked, setChecked] = useState([]);

	const handleToggle = t => () => {
		 //return the first index or -1
		const currentCaracteristica = checked.indexOf(t);
		const newCheckedCaracteristica = [...checked];

		//if currently checked was not already in checked state > push
		//else pull/take off
		if(currentCaracteristica === -1){
			newCheckedCaracteristica.push(t);
		}else{
			newCheckedCaracteristica.splice(currentCaracteristica, 1);
		}
		//console.log(newCheckedCaracteristica);
		setChecked(newCheckedCaracteristica);
		handleFilters(newCheckedCaracteristica);
	};

	return transmision.map((t, i) => (
		      
    <label className="form-check" key={i} >
      <input  onChange={handleToggle(t.caracteristica)} value={checked.indexOf(t.caracteristica === -1)}
      className="form-check-input" type="checkbox" />
      <span className="form-check-label"> {t.caracteristica} ({t.total}) </span>
    </label> 

	));
};

export default CheckboxTwo;