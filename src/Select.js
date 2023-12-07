import './Select.css'
import { Header } from './Header';

export const Select = () => {
    return (
        <div className='select'>
            <Header/>
            <div class="search">
                <label>PUBLIC PLAYLIST SEARCH</label>
                <input type="text" placeholder="Find a public playlist..." className="username" required/>
                <button type="submit" className='playlist-submit-button'>SUBMIT</button>
            </div>
            <div class="choose">
            <button type="submit" className='existing-playlist-button'>SELECT AN EXISITING PLAYLIST</button>
            </div>
        </div>
    )
}