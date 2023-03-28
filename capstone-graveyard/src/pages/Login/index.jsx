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
            <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
            <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleLogIn} />
            </div>
        </div>
    );
};

export default Login;