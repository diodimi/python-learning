import logo from './logo.svg';
import './App.css';
import Credentials from './Components/Credentials/Credentials'
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home'


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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
