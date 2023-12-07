import './Home.css'
import { HeaderSignedOut } from './HeaderSignedOut';

export const Login = () => {
    return (
        <div className="App">
        <HeaderSignedOut/>
          <div className='square-container'>
            <h1>Collageify!</h1>
            <button type="submit" className='login-button'>LOGIN WITH SPOTIFY</button>
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