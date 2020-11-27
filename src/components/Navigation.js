import { Link } from "react-router-dom";


const Navigation = () => {
    return ( 
        
            <nav id='navi'>
            <ul>
                <li>
                <Link to="/" exact>HOME</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/entertainment">ENTERTAINMENT</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/shop">SHOP</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/events">EVENTS</Link>
                </li>
            </ul>
            <ul>
                <li>
                <Link to="/contact">CONTACT</Link>
                </li>
            </ul>
        </nav>
        
     );
}
 
export default Navigation;