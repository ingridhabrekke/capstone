import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import Modal from "react-overlays/Modal";
import { UserAuth } from '../../../context/AuthContext';


function List({ colleges }) {
	const { user } = UserAuth();
	const [entries, setEntries] = useState([]);


	const fetchData = async () => {

		await getDocs(collection(db, "entries"))
			.then((querySnapshot) => {
				const newData = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				setEntries(newData);
			})
	}

	useEffect(() => {
		fetchData();
	}, [])


	const [title, setTitle] = React.useState("")
	const [text, setText] = React.useState("");
	const [classes, setClasses] = React.useState("");
	const [deliv, setDeliv] = React.useState("");

	// initialize college checklist (none checked)
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

	const handleClaim = (entry) => {
		updateDoc(doc(db, 'entries', entry), { claimed: user?.uid });
		fetchData();
	}

	const handleUnclaim = (entry) => {
		updateDoc(doc(db, 'entries', entry), { claimed: "" });
		fetchData();
	}

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
				deliv: deliv,
				//claimed: false
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
				<button key="help" className="absolute top-0 right-0 bg-gray-300 p-2 rounded-md" onClick={() => setShowModal(true)}>
					Add to Graveyard
				</button>
			</div>
			<div className="container max-h-80 justify-start pb-4">
				{
					entries?.map((entry) => {
						// find indices of colleges that the entry is associated with 
						const indices = entry.colleges.flatMap((bool, index) => bool ? index : []);

						// get the icons for the colleges and map to HTML elements
						const displayIcons = () => {
							return (indices.map((j) => <span className="inline-block mr-1"><img className="w-8" alt="" src={colleges[j].icon} /></span>))
						};

						// display claiming and unclaiming buttons
						const claims = () => {
							if (entry.claimed) {
								//updateDoc(doc(db, 'entries', entry.id), { claimed: ""})
								if (entry.claimed === user?.uid) { 
									return (<button className="float-right  p-1 bg-red-200 rounded-md" onClick={() => handleUnclaim(entry.id)}>Unclaim project</button>);
								} else {
									return (<p className="float-right text-red-900 p-1 ml-4">Claimed</p>)
								}
							} else {
								return (<button className="float-right border border-gray-300 p-1 rounded-md" onClick={() => handleClaim(entry.id)}>Claim project</button>);
							}
						};

						for (var i of indices) {
							if (colleges[i]['checked'] === true) {
								return (<div key={entry.id} className="mb-5 relative  mt-5 pb-0 flex-col shadow-md rounded-md border bg-white border-gray-300 m-8">
									<div className="h-full grid-cols-5">
										<div className="p-5">
											<div className="relative mb-4">
												<h3 className="inline text-xl pb-2 pt-2 font-bold">{entry.title}</h3>
												<div className="float-right">{displayIcons()} </div>
											</div>
											<p>{entry.text}</p>
											<br />
											<p>Relevant classes: {entry.classes}</p>
											<div className="relative">
												<p className="inline">{claims()}Suggested deliverable(s): {entry.deliv} </p>
											</div>
										</div>
									</div>
								</div>);
							}
						}
						return (<div></div>)
					})
				}
			<br/>
			</div>


			{/* Inspiration for modal implementation: 
			Contact mentor. (n.d.).  Create Modal in React JS with Overlay – Contact Mentor.
			Retrieved February 26, 2023, from https://contactmentor.com/create-modal-react-js-overlay/   */}

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
												<input type="text" className="border-1 rounded-sm border-black pl-2" onChange={(e) => setTitle(e.target.value)}></input>
											</div>

											<div className="mt-4">
												<label className="container" htmlFor="college">College(s):</label>

												{// map the colleges to checkboxes 
													colleges.map(item => {
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
											<textarea className="container h-32 p-2 m-0" placeholder="What is your project suggestion? 
												Think about: &#13;&#10;- What problem/question does the project aim to solve/answer?&#13;&#10;- What are the goals/objectives of the project?&#13;&#10;- Any constraints? "
												id="desc" name="desc" onChange={(e) => setText(e.target.value)}></textarea>
											<div className="container">
												<label className="container" htmlFor="classes">Relevant classes: </label>
												<input type="text" className="border-1 pl-2 rounded-sm border-black" onChange={(e) => setClasses(e.target.value)}></input>
											</div>
											<div className="container">
												<label className="container" htmlFor="deliv">Suggested deliverable(s): </label>
												<input type="text" className="border-1 pl-2 rounded-sm border-black" onChange={(e) => setDeliv(e.target.value)}></input>
											</div>
											<button className="bg-gray-500 p-2 block m-auto rounded-md" onClick={addToDb}>Bury idea</button>
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



