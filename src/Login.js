import './Home.css'
import { HeaderSignedOut } from './HeaderSignedOut';

export const Login = () => {
    return (
        <div className="App">
        <HeaderSignedOut/>
          <div className='square-container'>
            <h1>Collageify!</h1>
            <button type="submit" className='login-button'>
              <img src={require('./img/Spotify_Logo.png')} alt='Spotify Login' className='spotify-logo'/>
              <div className='button-text'>LOGIN WITH SPOTIFY</div>
            </button>
          </div>
          <div className='descriptions'>
          <h2>Connect with Spotify!</h2>
            <p>Login with the Spotify button above to seamlessly authenticate an already existing Spotify account!
            </p>
            <h2>Create Your Own Collage!</h2>
            <p>Once you're logged into Spotify, choose any one of your own Spotify playlists to make a collage out of!
            </p>
            <h2>Discover Public Playlists on Spotify!</h2>
            <p>Spend your time searching existing public playlists and make your very own collages!
            </p>
          </div>
        </div>
      );
}