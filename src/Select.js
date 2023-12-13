import './Select.css'
import placeholder from'./placeholder.jpeg';
import { Header } from './Header';

export const Select = () => {
    return (
        <div className='select'>
            <Header/>
            <div class="search">
                <h1 className='title'>PUBLIC PLAYLIST SEARCH</h1>
                <input type="text" placeholder="Find a public playlist..." className="username" required/>
                <button type="submit" className='common-button'><span>SUBMIT</span></button>
                <button type="submit" className='common-button'><span>SELECT AN EXISITING PLAYLIST</span></button>
            </div>
            <h1 className='title'>RESULTS</h1>
            <div className='collage-container'>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
                <img className='collage1' src={placeholder} alt=""/>
            </div>
        </div>
    )
}