import React from 'react';
import NavBar from '../../components/Home/NavBar';
import Filtering from '../../components/Home/Filtering';
import List from '../../components/Home/List';



function Home() {

	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<div className="flex flex-1 overflow-auto">
				<div className="basis-72 overflow-auto shadow-2xl">
					<Filtering />
				</div>

				<div className="flex-1 overflow-auto">
					<List />
				</div>
			</div>
		</div>
	)
};

export default Home;