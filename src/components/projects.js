import React from 'react'
function projects(props){
    return(
        <div className='ml-6 mt-4 shadow-xl rounded-lg h-32 w-38 border-2'>
                <img className='mx-2 mt-2 rounded-md h-16 w-32 object-cover-top' src={props.image}/>
                <div className='mx-2 mt-4 shadow-xl rounded-lg h-8 w-38 border-2 text-sm font-bold'>{props.name}</div>
         </div>
    );
}
export default projects;