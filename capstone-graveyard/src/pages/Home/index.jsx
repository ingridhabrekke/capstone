import React from 'react';
import NavBar from '../../components/Home/NavBar';
import Filtering from '../../components/Home/Filtering';
import List from '../../components/Home/List';
import { db } from '../../firebase';
import { collection, addDoc } from "firebase/firestore";


function Home() {
	const [text, setText] = React.useState("");
	const [title, setTitle] = React.useState("")

	const addToDb = async () => {
		try {
			const docRef = await addDoc(collection(db, "entries"), {
				title: title,
				text: text,
			});
			console.log("Document written with ID: ", docRef.id);
		} catch (e) {
			console.error("Error adding document: ", e);
		}
	}

	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<div className="flex flex-1 overflow-auto">
				<div className="basis-64 overflow-auto shadow-2xl">
					<Filtering />
				</div>

				<div className="flex-1 overflow-auto">
					<div >
						<input type="text" className="border-4 border-black" onChange={(e) => setTitle(e.target.value)}></input>
						<input type="text" className="border-4 border-black" onChange={(e) => setText(e.target.value)}></input>
						<button className="border-4 border-black" onClick={addToDb} >submit</button>
					</div>

					<List />
				</div>
			</div>
		</div>
	)
};

export default Home;