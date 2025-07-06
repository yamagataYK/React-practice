
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import logo from '../assets/react.svg';


function Header() {
    return (
        <header>
            <img src={logo} alt="ロゴ" />
            <nav>
                <ul>
                    <li><Link to="/home">ホーム</Link></li>
                    <li><Link to="/two">二個目</Link></li>
                    <li><Link to="/three">三個目</Link></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header;