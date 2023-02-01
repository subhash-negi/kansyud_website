import React from 'react';
import Gaon from './gaon.jpg';
function scroller(){
    return(
        <div>
                <img className=' mt-4 ml-4 shadow-2xl  border-2 border-black h-40 w-80 rounded-lg' src={Gaon}/>
        </div>
    );
}
export default scroller;