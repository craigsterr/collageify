import './App.css';
import { Home } from './Home';
import { Select } from './Select';

import { Collage } from './Collage';
import { Login } from './Login';

import {Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <Home/>
        }/>
        <Route path="/select" element={
            <Select/>
        }/>
        <Route path="/collage" element={
            <Collage/>
        }/>
        <Route path="/login" element={
            <Login/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
