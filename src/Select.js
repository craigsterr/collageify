import './Select.css'
import { Header } from './Header';

export const Select = () => {
    return (
        <div className='select'>
            <Header/>
            <div class="search">
                <h1 className='title'>PUBLIC PLAYLIST SEARCH</h1>
                <input type="text" placeholder="Find a public playlist..." className="username" required/>
                <button type="submit" className='common-button'><span>SUBMIT</span></button>
            </div>
            <div class="choose">
            <button type="submit" className='common-button'><span>SELECT AN EXISITING PLAYLIST</span></button>
            </div>
        </div>
    )
}