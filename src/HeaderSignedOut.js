import './Header.css'

export const HeaderSignedOut = () => {
    return (
        <div>
            <div className='header'>
                <h1>Collageify!</h1>
                <ul className='navigation'>
                    <li><a href="/home">Login</a></li>
                </ul>
            </div>
            <div className='white-space'/>
        </div>
    )
}