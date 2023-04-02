import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';
import Login from './pages/Login';
import Home from './pages/Home';
import About from './pages/About';
import WritingTips from './pages/WritingTips';

/** App component. Returns the HTML for the whole page 
 * with routing and protected pages.   */
const App = () => {
	return (
		<div>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Protected><Home /></Protected>} />
					<Route path='/about' element={<Protected><About /></Protected>} />
					<Route path='/writing-entries' element={<Protected><WritingTips /></Protected>} />
				</Routes>
				
			</AuthContextProvider>
			
		</div>
		
	);
}

export default App;
