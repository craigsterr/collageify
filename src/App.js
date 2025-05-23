import './App.css';
import { Home } from './Home';
import { Select } from './Select';

import { Collage } from './Collage';
import { Login } from './Login';
import { Library } from './Library';
import { Header } from './Header';

import {Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={
            <Home/>
        }/>
        <Route path="/select" element={
            <Select/>
        }/>
        <Route path="/collage" element={
            <Collage/>
        }/>
        <Route path="/" element={
            <Login/>
        }/>
        <Route path="/library" element={
            <Library/>
        }/>
        <Route path="/header" element={
            <Header/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
