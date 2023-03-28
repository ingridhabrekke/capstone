import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Filtering({ colleges, setColleges }) {
    

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
	
	
	const handleSearch = () => {
		return 0
	};

	return (
		<div className="p-4">
			<h1 className="text-2xl pt-2">Filtering</h1>
			{/* <div className="items-center p-4"> 
				<div className="border-b border-gray-600 pb-1">
					<SearchIcon className="mr-2" />
					<input
						type="text"
						placeholder="Search projects"
						value={undefined} onChange={handleSearch}
						className="outline-none b-none"
					/>
				</div>
			</div> */}
			<div> {/*input group*/}
				<h2 className="text-xl py-2">College</h2> {/*label*/}
				{colleges.map((el) => {
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

		</div>
	)
};

export default Filtering;