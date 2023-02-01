import React from 'react';
import Logo from './hut.png';
function logo(){
    return(
        <>
        <div className='flex'>
            <img className='h-10 w-10 ml-4 mt-4' src={Logo}/>
            <p className='ml-2 mt-6 font-extrabold text-purple-600'>KANSYUD</p>
            <div className='border-2 border-blue-600 h-14 w-28 mt-4 rounded-md ml-20'>
               
                <p className='text-xs'>जल्दी ही यहाँ पर kansyud का मौसम अपडेट होगा</p>
            </div>
        </div>

        </>
    );
}
export default logo;
