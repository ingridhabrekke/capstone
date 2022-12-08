import React from 'react';
import NavBar from '../../components/Home/NavBar';
import Filtering from '../../components/Home/Filtering';
import List from '../../components/Home/List';

function Home() {
    return(
        <div className="flex flex-col h-screen">
            <NavBar className="bg-red-200"/>
            <div className="flex flex-1 overflow-auto">
                <div className="basis-64 overflow-auto">
                    <Filtering />
                </div>
                <div className="bg-blue-200 flex-1 overflow-auto">
                    <List />
                </div>
            </div>  
        </div>
    )
};

export default Home;