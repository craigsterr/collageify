import './Home.css'

export const Home = () => {
    return (
        <div className="App">
          <div className='square-container'>
            <h1>Collageify!</h1>
            <button type="submit" className='login-button'>spotify login</button>
            {/* <div className='login-container'>
              <label>Username</label>
              <input type="text" placeholder="Enter Username" className="username" required/>
              <label>Password</label>
              <input type="text" placeholder="Enter Password" className="password" required/>
            </div> */}
          </div>
          <div className='descriptions'>
            <h2>User Interaction 1</h2>
            <p> Use the login with spotify button to get authentication of spotify account.
            </p>
            <h2>User Interaction 2</h2>
            <p> Once logged into spotify, you may choose one of your own playlists to make a collage out of. 
            </p>
            <h2>User Interaction 3</h2>
            <p>Once logged into spotify, you may search existing public playlists and make a collage out that.
            </p>
          </div>
        </div>
      );
}