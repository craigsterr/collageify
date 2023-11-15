import './App.css';
import { Home } from './Home';
import { Select } from './Select';
import {Route, Routes} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
            <Home/>
        }/>
        <Route path="/select" element={
            <Home/>
        }/>
      </Routes>
    </div>
  );
}

export default App;
