//import './App.css';
import Home from './pages/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Protected from './components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/Login';


function App() {
	return (
		<div>
			<AuthContextProvider>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/home' element={<Protected><Home /></Protected>} />
					
				</Routes>
				
			</AuthContextProvider>
			
		</div>
		
	);
}

export default App;
