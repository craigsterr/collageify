import './Header.css'

export const HeaderSignedOut = () => {
    return (
        <div className='header'>
            <h1>Collageify!</h1>
            <ul className='navigation'>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}