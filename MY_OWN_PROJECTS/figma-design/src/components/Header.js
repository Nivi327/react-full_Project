import classes from './Header.module.css';
import Logo from './../images/logo-in.png';

const Header = props => {
    return <div className={classes.header}>
        <div >
            <img src={Logo} alt={Logo} className={classes.logo}/>
        </div>
        <div className={classes.searchbar}>
            <div>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for your favourite group in ATG" className={classes.input} />
            </div>
        </div>
        <div className={classes['create-account']}>
             <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Create Account. <span className={classes.free}>It's free</span>
          </a>
        </div>
    </div>
};

export default Header;