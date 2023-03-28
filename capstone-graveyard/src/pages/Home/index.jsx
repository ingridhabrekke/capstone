import React, {useState} from 'react';
import NavBar from '../../components/Home/NavBar';
import Filtering from '../../components/Home/Filtering';
import List from '../../components/Home/List';
//import { UserAuth } from '../../context/AuthContext';


function Home() {
	// const { user } = UserAuth();

	// const handleLogout = async () => {
	// 	try {
	// 		await logOut();
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };


	const [colleges, setColleges] = useState([
		{
			id: 0, 
			checked: true, 
			label: 'AH', 
			name: 'Arts & Humanities'
		}, 
		{
			id: 1,
			checked: true,
			label: 'B',
			name: 'Business'

		}, 
		{
			id: 2,
			checked: true,
			label: 'CS',
			name: 'Computational Sciences'

		}, 
		{
			id: 3,
			checked: true,
			label: 'NS',
			name: 'Natural Sciences'

		}, 
		{
			id: 4,
			checked: true,
			label: 'SS',
			name: 'Social Sciences'

		}
	]);

	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<div className="flex flex-1 overflow-auto">
				<div className="basis-72 overflow-auto shadow-2xl">
					<Filtering colleges={colleges} setColleges = {setColleges}/>
				</div>

				<div className="flex-1 overflow-auto">
					{/* <div>
						<p>Welcome, {user?.displayName}</p>
					</div> */}
					{/* <button onClick={handleLogout} className='border py-2 px-5 mt-10'>
						Logout
					</button> */}
					<List colleges={colleges} />
				</div>
			</div>
		</div>
	)
};

export default Home;