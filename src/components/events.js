import React from 'react';
import Bhairav from './bhairav.jpeg'
import Dhaandu from './daandu.jpg'
import Khaandu from './khaandu.jpg'
import Baakhi from './baakhi.jpg'
 import School from './school.jpeg'
function events(props){
    return(
        <div className='rounded-lg h-5/6 bg-gray-200 w-80 ml-4 border-2 shadow-md shadow-black mb-6'>
            <div className='flex'>
                <img className='shadow-md border-2 border-purple-400 rounded-full h-16 w-16 ml-2 mt-2 object-fit' src={props.image}></img>
                <p className='text-xs mt-4 font-semibold'> कन्स्यूड गांव हर 3 साल के बाद भगवान नागराज के दर्शन करता है। इस कार्यक्रम में आसपास के 7 गांव मिलकर हिस्सा लेते हैं। इस अवसर पर बंगियाल में एक मेले (थौलू) का आयोजन किया जाता है.</p>  
            </div>
            <div className='flex'>
                <p className='text-xs mt-4 font-semibold'>कन्स्यूड के साल्डा नामक तोक में यह भैरव देवता का मंदिर है। यही पास मे एक ताल भी है जिसे भैरु की कुंडी के नाम से जाना जाता है कहते है कि बहुत सूखा पड़ने पर भी यहाँ सदा पानी रहता है । </p>  
                <img className='rounded-full h-16 w-16 mr-2 my-2 object-cover shadow-md border-2 border-purple-400' src={Bhairav}></img>
            </div>
           
            <div className='my-2 flex'>
                <img className='mt-4 shadow-md border-2 border-purple-400 rounded-full h-16 w-16 ml-4 mt-2' src={Dhaandu}></img>
                <img className='shadow-md border-2 border-purple-400 rounded-full h-16 w-16 ml-2 mt-2' src={Khaandu}></img>
                <img className='mt-4 shadow-md border-2 border-purple-400 rounded-full h-16 w-16 ml-2 mt-2' src={Baakhi}></img>
                <img className='shadow-md border-2 border-purple-400 rounded-full h-16 w-16 ml-2 mt-2 object-cover' src={School}></img>
            </div>
            
        </div>
    );
}
export default events;
