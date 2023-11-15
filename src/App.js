import './App.css';
import { Home } from './Home';
import { Select } from './Select';
import { Header } from './Header';

import {Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={
            <Home/>
        }/>
        <Route path="/select" element={
            <Select/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
