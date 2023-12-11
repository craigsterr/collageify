import './Home.css'
import { Header } from './Header';

export const Home = () => {
    return (
        <div className="App">
          <Header/>
          <div className='square-container'>
            <h1>Collageify!</h1>
            <h2>You are successfully logged in!</h2>
            <p>Welcome to Collageify! Your one stop shop for custom Spotify collages!</p>
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