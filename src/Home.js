import './Home.css'

export const Home = () => {
    return (
        <div className="App">
          <div className='square-container'>
            <h1>Collageify!</h1>
            <button type="submit" className='login-button'>LOGIN WITH SPOTIFY</button>
            {/* <div className='login-container'>
              <label>Username</label>
              <input type="text" placeholder="Enter Username" className="username" required/>
              <label>Password</label>
              <input type="text" placeholder="Enter Password" className="password" required/>
            </div> */}
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