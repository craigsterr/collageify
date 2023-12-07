import './Collage.css'
import placeholder from'./placeholder.jpeg';
import { Header } from './Header';

export const Collage = () => {
    return (
        <div className='collage'>
            <Header/>
            <div className='search'>
                <h1>PLAYLIST NAME</h1>
                <button type="submit" className='collage-button'>SET COLLAGE AS PLAYLIST IMAGE</button>
                <button type="submit" className='follow-button'>FOLLOW PLAYLIST</button>
            </div>
            <img className='placeholder1' src={placeholder} alt=""/>
        </div>
    )
}