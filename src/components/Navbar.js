import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.menu}>
            <h2 className={styles.logo}>CineCesupa</h2>

            <ul className={styles.links}>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/filmes">Filmes</Link></li>
                <li><Link to="/series">Séries</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;