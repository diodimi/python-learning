import logo from './logo.svg';
import './App.css';
import Credentials from './Components/Credentials/Credentials'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home'
import Begginer from './Components/Home/Beginner/Begginer';
import Advanced from './Components/Home/Advanced/Advanced';
import Intermediate from './Components/Home/iNTERMEDIATE/Intermediate';
import Epanaliptiko from './Components/Home/Epanaliptiko/Epanaliptiko';
import OnlineHelp from './Components/Home/OnlineHelp/onlineHelp';

function App() {
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
        <Route exact path="/" element={

<div className="App">
<Credentials/>
</div>
        }/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/beginner" element={<Begginer/>}/>
        <Route exact path="/intermediate" element={<Intermediate/>}/>
        <Route exact path="/advanced" element={<Advanced/>}/>
        <Route exact path="/sumup" element={<Epanaliptiko/>}/>
        <Route exact path="/help" element={<OnlineHelp/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
