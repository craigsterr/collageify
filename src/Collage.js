import './Collage.css'
import placeholder from'./placeholder.jpeg';
import { Header } from './Header';

export const Collage = () => {
    return (
        <div className='collage'>
            <Header/>
            <div className='search'>
                <h1 className='title'>PLAYLIST NAME</h1>
                <div className='img-container'>
                    <img className='placeholder1' src={placeholder} alt=""/>
                </div>
                <div className='button-container'>
                    <button type="submit" className='common-button'><span>SET COLLAGE AS PLAYLIST IMAGE</span></button>
                    <button type="submit" className='common-button'><span>FOLLOW PLAYLIST</span></button>
                </div>
            </div>
        </div>
    )
}