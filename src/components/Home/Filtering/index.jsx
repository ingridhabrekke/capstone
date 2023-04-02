import React from "react";

/** 
 * Returns HTML for the Filtering panel. 
 * @param {list} colleges - The list of dictionaries with info about each college. 
 * @param {function} setColleges - The function that updates the state of colleges. 
 */
function Filtering({ colleges, setColleges }) {
    
	// set the college as 'checked' if the checkbox is ticked 
	const handleChange = (position) => {
		const updatedCheckedState = colleges.map(item => {
			if (item.id === position) {
				return { ...item, checked: !item.checked }
			}else{
				return item
			}
		});
		setColleges(updatedCheckedState);
	};
	
	return (
		<div className="p-4">
			<h1 className="text-2xl pt-2">Filtering</h1>
				<h2 className="text-xl py-2">College</h2> 
				{
				// make a checkbox for each college in colleges
				colleges.map((el) => {
					return (
						<div key={el.id} className="container px-2 py-1">
							<input
								type="checkbox"
								id={`custom-checkbox-${el.id}`}
								name={el.label}
								value={el.label}
								checked={el.checked}
								onChange={() => handleChange(el.id)}
							/>
							<label className="p-1" htmlFor={`custom-checkbox-${el.id}`}>{el.name}</label>
						</div>
					);
				})}
			</div>

	)
};

export default Filtering;