import React from 'react'
import Hut from './hut.png';
function commanings(props){
    return(
        <div>
            <div className='flex-col'>
                <img className='h-18 w-16 ml-4 mt-6 rounded-full border-purple-500 border-2 object-cover ' src={props.image}></img>
                <p className=' ml-2 text-left text-xs'>{props.name}</p>
                <p className=' ml-2 text-left text-xs'>{props.desig}</p>
            </div>
        </div>
    );
}
export default commanings;
