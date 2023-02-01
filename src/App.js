import logo from './logo.svg';

import './App.css';
import Logo from './components/logo'; 
import Scroller from './components/scroller';
import Commanings from './components/commands';
import Projects from './components/projects';
import Maps from './components/maps';
import Events from './components/events';
import Pradhan from './components/pr.jpg';
import Nain from './components/nain.jpeg';
import Subhash from './components/subhash.jpeg';
import Gate from './components/gate.jpeg';
import Road from './components/road.webp';
import Naagraja from'./components/naag.jpg'
import Vinod from './components/vinod_kohli.jpg'



function App() {
  return (
    <div className="App">
      <Logo/>
      <Scroller/>
      <div className='flex'>
        <Commanings image={Pradhan} desig="(ग्राम प्रधान)"name='Shri Manohar Uniyal'/>
        <Commanings image={Nain}desig="(क्षेत्र पंचायत सदस्य)"name='Shri Nain Singh Gusain '/>
        <Commanings image={Vinod}desig="(जिला पंचायत सदस्य)"name='Shri Vinod Kohli'/>
      </div>
      <p className='ml-4 text-xl text-left text-blue-500 font-extrabold mt-4'>RECENT PROJECTS</p>
      <div className='flex'>
         <Projects name='नवनिर्मित स्वागत द्वार' image={Gate}/>
         <Projects name='ग्राम सड़क योजना' image={Road}/>
      </div>
      <p className='ml-4 text-xl text-left text-blue-500 font-extrabold mt-4'>KANSYUD'S MAP</p>
      <Maps/> 
      <p className='ml-4 text-xl text-left text-blue-500 font-extrabold my-4'>KANSYUD AT A GLANCE</p>
      <Events image={Naagraja}/>
      <div className='h-20 w-80 ml-4  shadow-md shadow-black border-2 bg-gray-300 rounded-full '>
        <p className='mt-4 font-bold'>made with love❤️</p>
        <div>
           <p className='ml-20 mb-4 font-semibold'>     --by Subhash negi💕</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
