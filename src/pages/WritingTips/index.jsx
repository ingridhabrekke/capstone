import React from 'react';
import NavBar from '../../components/common/NavBar';

/** WritingTips component. Returns HTML for 'Writing entires' page.  */
const WritingTips = () => {

	return (
		<div className="flex flex-col h-screen">
			<NavBar />
			<div className="flex flex-1 overflow-auto">
				<div className="p-8 ">
					<h1 className="text-3xl mb-4">Tips for Writing Entries</h1>
					<p>This page contains tips and guiding questions for entering ideas into the database.
						<br />
						When adding to the Graveyard, you will be asked to enter several pieces of information about your project.
						Below are some tips for how to write a good entry that gives others a good grasp of what the suggested project entails. You do not need to answer all the guiding questions or follow all of the advice below, but it could help you communicate your ideas.
					</p>
					<br />
					<div className="space-y-2 mb-16">
						<p className="font-bold">Project title:</p>
						<ul className="list-disc pl-8">
							<li>Make it catchy!</li>
							<li>Use less than 20 words</li>
						</ul>
						<p className="font-bold">Project description:</p>
						<ul className="list-disc pl-8">
							<li>What problem/question does the project aim to solve/answer?</li>
							<li>What are the goals/objectives of the project?</li>
							<li>Are there any important constraints?</li>
							<li>What are some key skills or concepts that are needed to complete the project?</li>
							<li>Are there any vital or relevant resources that should be mentioned, e.g.articles/datasets/contact person(s), etc.?</li>
						</ul>
						<p className="font-bold">Relevant classes:</p>
						<ul className="list-disc pl-8">
							<li>List from most to least relevant Minerva class</li>
						</ul>
						<p className="font-bold">Suggested deliverable(s):</p>
						<ul className="list-disc pl-8">
							<li>Is there a well-defined deliverable?</li>
							<li>Could there be several potential deliverables?</li>
						</ul>
					</div>
					<a className="bg-gray-300 p-2 rounded-md" href="/home">
						Back to home
					</a>
				</div>


			</div>
		</div>
	)
};

export default WritingTips;