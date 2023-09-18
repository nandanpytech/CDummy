import './App.css';
import './input.css'
import Carousel from './Components/Cards/Carousel';
import Headers from './Components/Main_Headers/Headers';
import NavBar from './Components/Navbar/NavBar';
import Community from './Components/Gated Community/Community';
import ProjectContainer from './Components/ProjectStatus/ProjectContainer';
import MeetingGraph from './Components/Meeting/MeetingGraph';

function App() {
  return (
    <div className="App w-[390px]">
      <NavBar/>
      <div className='main_container'>
        <Headers name={"Referral Partner"}/>
        <Carousel/>
        <Headers name={"Gated Community"}/>
        <Community/>
        <Headers name={"Cendrol Growth"}/>
        <ProjectContainer/>
        <MeetingGraph/>
      </div>
    </div>
  );
}

export default App;
