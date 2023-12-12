import './Header.css'

export const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Collageify!</h1>
                <ul className='navigation'>
                    <li><a href="/">Home</a></li>
                    <li><a href="/select">Select</a></li>
                    <li><a href="/collage">Collage</a></li>
                    <li><a href="/library">Library</a></li>
                </ul>
            </div>
            <div className='white-space'/>
        </div>
    )
}