import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <h1>Collageify!</h1>
        <ul className="navigation">
          {/* <a><li>Home</li></a>
          <a><li>About</li></a> */}
        </ul>
      </div>
      <div className='square-container'>
        <h1>Collageify!</h1>
        <div className='login-container'>
          <label>Username</label>
          <input type="text" placeholder="Enter Username" className="username" required/>
          <label>Password</label>
          <input type="text" placeholder="Enter Password" className="password" required/>
          <button type="submit" className='login-button'>Login</button>
        </div>
      </div>
      <div className='descriptions'>
        <h2>Feature 1</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
           consequat.
        </p>
        <h2>Feature 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
           consequat.
        </p>
        <h2>Feature 3</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
           consequat.
        </p>
      </div>
    </div>
  );
}

export default App;
