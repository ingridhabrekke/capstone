import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import Modal from "react-overlays/Modal"; 
import Parser from 'html-react-parser';

function List({ colleges }) {
	const [entries, setEntries] = useState([]);


	const fetchData = async () => {

		await getDocs(collection(db, "entries"))
			.then((querySnapshot) => {
				const newData = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				setEntries(newData);
				//console.log(entries, newData);
			})
	}

	useEffect(() => {
		fetchData();
	}, [])

	
	const [title, setTitle] = React.useState("")
	const [text, setText] = React.useState("");
	const [classes, setClasses] = React.useState("");
	
	// initialize college checklist (none checked)
	//const colleges = ["AH", "B", "CS", "NS", "SS"];
	const [checkedState, setCheckedState] = useState(
		new Array(colleges.length).fill(false)
	);

	// update list when checks change 
	const handleChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedState(updatedCheckedState);
	};

	// visibility of new entry modal
	const [showModal, setShowModal] = useState(false);
	var handleClose = () => setShowModal(false);


	// add current "state" to database and close modal
	const addToDb = async () => {
		try {
			const docRef = await addDoc(collection(db, "entries"), {
				title: title,
				text: text,
				colleges: checkedState, 
				classes: classes,
			});
			setShowModal(false);
			fetchData();
			console.log("Document written with ID: ", docRef.id);
			
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<div className="">
			<div className="m-8 relative">
				<h1 className=" pb-3 text-3xl ">Projects </h1>
				<button className="absolute top-0 right-0 bg-gray-300 p-2 rounded-md" onClick={() => setShowModal(true)}>
					Add to Graveyard
				</button>
			</div>
			<div className="container max-h-80 justify-start">
				{console.log(entries.length)}
				{
					entries?.map((entry) => {
						const indices = entry.colleges.flatMap((bool, index) => bool ? index : []);
						let s = '';
						for (var i in indices) {
							const id = indices[i];
							if (colleges[id]['checked'] === true) {
								s += `<div key=${i} className="mb-5 mt-5 flex-col shadow-md rounded-md border bg-white border-gray-300 m-8"><div className="h-full grid-cols-5"><div className="p-5"><h3 className="text-xl">${entry.title}</h3><p>${entry.text}</p></br><p>Relevant classes: ${entry.classes}</p></div></div></div>`;
								break;

							}
						}
					return (<div>{Parser(s)}</div>)
					})
				}
			</div>

			<Modal
				className="fixed w-1/2 h-1/2 z-50 top-1/4 left-1/4 border-1 rounded-md bg-white"
				show={showModal}
				onHide={handleClose}

			>
				<div>
					<div className="fixed bg-black bg-opacity-80 inset-0 transition-opacity" id="addreview">
						<div className="flex flex-col justify-center items-center">
							<div className="m-20 p-10 bg-gray-200 rounded-md w-1/2 relative ">
								<h2 className="text-2xl font-bold">Add to the Graveyard </h2>
								<button className="absolute top-5 right-7 font-bold  hover:gray-800" onClick={handleClose}>&times;</button>
								<div className="block mt-5">
									<div>
										<div className="space-y-5"  >
											<div className="container">
												<label className="container" htmlFor="title">Project Title: </label>
												<input type="text" className="border-1 rounded-sm border-black" onChange={(e) => setTitle(e.target.value)}></input>
											</div>

											<div className="mt-4">
												<label className="container" htmlFor="college">College(s):</label>
												
												{colleges.map(item => {
													return (
														<div key={item.id} className="container inline pl-2">
																	<input
																		type="checkbox"
																		id={`custom-checkbox-${item.id}`}
																		name={item.label}
																		value={item.label}
																		checked={checkedState[item.id]}
																		onChange={() => handleChange(item.id)}
																	/>
																	<label className="p-1" htmlFor={`custom-checkbox-${item.id}`}>{item.label}</label>
														</div>
													
													);
												})}
											</div>							
											<label className="container block" htmlFor="desc">Project Description</label>
												<textarea className="container" placeholder="What is your project suggestion? Give us the deets" 
												id="desc" name="desc" onChange={(e) => setText(e.target.value)}></textarea>
											<div className="container">
												<label className="container" htmlFor="classes">Relevant classes: </label>
												<input type="text" className="border-1 rounded-sm border-black" onChange={(e) => setClasses(e.target.value)}></input>
											</div>	
											<button  className="bg-gray-500 p-2 block m-auto rounded-md" onClick={addToDb}>Bury idea</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			</Modal>
		</div>
		

	)
};

export default List; 



