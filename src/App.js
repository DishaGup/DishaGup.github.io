 //import styles from "./style.css";
 import "./App.css";
 import './index.css'

import styled from 'styled-components';
import { Portfolio } from './Components/Portfolio';
import ParticleBackground from "./Components/Partclebackground";



function App() {
  return (
    <div style={{backgroundImage:`url("https://th.bing.com/th/id/R.be648984a8b42c11cc7843fb5f74e7ac?rik=5dF4trRca4diXg&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fNight-sky-wallpaper-photos-hd-wallpapers.jpg&ehk=6D2a0lUUgPJAsM%2bDzTbliqqiLyeI82K%2bHO2T3RZyoVE%3d&risl=&pid=ImgRaw&r=0")`,zIndex:'-1',opacity:'0.9'}} >
      {/* <ParticleBackground /> */}
     
   <Portfolio/>
    </div>
  );
}

const DIV=styled.div`
html{
  --section-background-color: linear-gradient(
    to bottom left,
    rgba(17, 16, 16, 0.582),
    rgba(12, 8, 24, 0.904)
  );

  --image-gradient: linear-gradient(
    to bottom left,
    rgba(17, 16, 16, 0.678),
    rgba(12, 10, 22, 0.863)
  );

  --imp-text-color: #c770f0;
}

.purple {
  color: var(--imp-text-color) !important;
}

button:focus {
  box-shadow: none !important;
}



`



export default App;
