import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";


function List() {
	const [entries, setEntries] = useState([]);


	const fetchData = async () => {

		await getDocs(collection(db, "entries"))
			.then((querySnapshot) => {
				const newData = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }));
				setEntries(newData);
				console.log(entries, newData);
			})
	}

	useEffect(() => {
		fetchData();
	}, [])


	return (
		<div className="">
			<h1 className="p-8 pb-3 text-2xl">Projects (x results)</h1>
			<div className="container max-h-80 justify-start ">

				{
					entries?.map((entry, i) => (
						<div key={i} className="mb-5 mt-5 block h-32 rounded-md border bg-white border-gray-300 m-8">
							<div className="h-full grid-cols-5">
								<div className="p-5">
									<p>{entry.title}</p>
									<p>{entry.text}</p>
								</div>
							</div>
						</div>

					))
				}

			</div>
		</div>

	)
};

export default List; 