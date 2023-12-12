import './Library.css'
import placeholder from'./placeholder.jpeg';
import { Header } from './Header';

export const Library = () => {
    return (
        <div className='collage'>
            <Header/>
            <div className='title'>
                <h1>YOUR LIBRARY</h1>
            </div>
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