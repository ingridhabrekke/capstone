import React, {useState} from 'react';
import NavBar from '../../components/common/NavBar';
import Filtering from '../../components/Home/Filtering';
import List from '../../components/Home/List';
//import { UserAuth } from '../../context/AuthContext';


const Home = () => {

	const [colleges, setColleges] = useState([
		{
			id: 0, 
			checked: true, 
			label: 'AH', 
			name: 'Arts & Humanities', 
			icon: 'https://d33z52hfhvk3mr.cloudfront.net/public/media/icons/icon_ah.png?_v=df24277'
		}, 
		{
			id: 1,
			checked: true,
			label: 'B',
			name: 'Business', 
			icon: 'https://d33z52hfhvk3mr.cloudfront.net/public/media/icons/icon_b.png?_v=df24277'

		}, 
		{
			id: 2,
			checked: true,
			label: 'CS',
			name: 'Computational Sciences', 
			icon: 'https://d33z52hfhvk3mr.cloudfront.net/public/media/icons/icon_cs.png?_v=df24277'

		}, 
		{
			id: 3,
			checked: true,
			label: 'NS',
			name: 'Natural Sciences', 
			icon: 'https://d33z52hfhvk3mr.cloudfront.net/public/media/icons/icon_ns.png?_v=df24277'

		}, 
		{
			id: 4,
			checked: true,
			label: 'SS',
			name: 'Social Sciences', 
			icon: 'https://d33z52hfhvk3mr.cloudfront.net/public/media/icons/icon_ss.png?_v=df24277'

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
					<List colleges={colleges} />
				</div>
			</div>
		</div>
	)
};

export default Home;