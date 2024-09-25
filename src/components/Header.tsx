import { Link } from 'react-router-dom';
function Header(){
   
    return(
        <header>
            <img src="Shortlist.png" alt="logo" />
            <nav>
            <Link to="/text-to-summary">Text to Summary</Link>
            <Link to="/image-to-text">Image to Text</Link>
            </nav>
        </header>
    )
}

export default Header