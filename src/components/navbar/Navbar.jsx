import { Link } from "react-scroll";
const Navbar = () => {
    
    return ( 

        <nav>
            <div className="navContainer">
                <div className="navLinks">
                    <li> About </li>
                    <li>Pricing</li>
                    <li>Developer</li>
                    <li className="hideInMobile"><Link to="form" spy={true} smooth={true} duration={500}>Create your icon</Link></li>
                </div>
            </div>
        </nav>

     );
}
 
export default Navbar;