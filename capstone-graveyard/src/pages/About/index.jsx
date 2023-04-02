import React from 'react';
import NavBar from '../../components/common/NavBar';

const About = () => {

	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<div className="flex flex-1 overflow-auto">
				<div className="p-8 w-1/2">
					<h1 className="text-3xl mb-4">About</h1>
					<p>
						The Capstone Graveyard is a platform that is meant to help students find Capstones they are interested 
						in and want to work on. Students and professors can share their Capstone ideas, and students can claim 
						an idea as their own. 
					</p>
					<br/>
					<p>
						The original idea for this website was suggested as a joke by one of my CP192 classmates; 
						since I was struggling so much with coming up with capstone ideas, why not make a tool to help people in this situation? 
						At this early stage of ideation, the website was only supposed to be a place for students to put in their unused ideas - 
						the ideas they “killed off” for various reasons during their capstone ideation processes. 
						This is where the name “Capstone Graveyard” came from. But, you can put in any project ideas here now, 
						whether it is one you killed or one that just came to life. 
					</p>
					<br />
					<p className="font-bold">Rules: </p>
						<ul className="list-disc pl-8 mb-8">
							<li>If you put a project in here, you should not work on it yourself - it could end up being someone's Capstone</li>
							<li>Do not work on projects you have not claimed </li>
							<li>You can only claim one project. </li>
							<li>Be respectful to other users by following the rules and only submitting serious project ideas:)</li>
						</ul>	
									
					<a className="bg-gray-300 p-2 rounded-md" href="/home">
						Back to home
					</a>	
				</div>
				
			</div>	
		</div>
	)
};

export default About;