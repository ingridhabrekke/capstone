import React from "react";
import SearchIcon from '@mui/icons-material/Search';

function Filtering({value, changeInput}) {
    return(
        <div>
            <h1>Filtering</h1> 
            <div className="items-center p-4"> {/* flex? px-, py- */}
                <div className="border-b border-gray-600 pb-1">
                    <SearchIcon className="mr-2"/> 
                    <input 
                        type="text" 
                        placeholder="Search projects" 
                        value={value} onChange={changeInput}
                        className="outline-none b-none" 
                    />
                </div> 
            </div>
            <div> {/*input group*/}
                <p>College</p> {/*label*/}
            </div>

        </div>
    )
}; 

export default Filtering;