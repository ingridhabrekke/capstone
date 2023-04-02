import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { googleLogIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleLogIn = async () => {
        try {
            await googleLogIn();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user != null) {
            navigate('/home');
        }
    }, [user, navigate]);

    return (
        <div>
            <div className="fixed w-1/2 h-1/2 top-1/4 left-1/4">
                <img src="graveyard.png" className="h-36 m-auto" alt="User Pic" />
                <h1 className='text-center text-3xl font-bold py-2'>Welcome to the Capstone Graveyard</h1>
                <h2 className='text-center text-l pb-8'>Log in with your Minerva account to access the graveyard:</h2>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleLogIn} />
            </div></div>
        </div>
    );
};

export default Login;