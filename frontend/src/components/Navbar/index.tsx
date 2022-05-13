import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css'
function Navbar(){
    return(
        <header>
            <nav className="container">
                <div className="dsmovie-nat-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/HorstGab">
                        <div className="dsmovie-contact-container">
                            <GitHubIcon />
                            <p className="dsmovie-contact-link">/HorstGab</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}
export default Navbar;