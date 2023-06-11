import RainbowText from "rainbow-text-react";
import { Link } from "react-scroll";
const Home = () => {
    
    return ( 
        <div className="welcome">
            <div className="left">
        <RainbowText>
        Create your own chat icon
        </RainbowText>
        <div className="featureList">
            <li>Connect your whatsapp, messenger, email & phone.</li>
            <li>No code required.</li>
            <li>Fill a single form and Get Started.</li>
        </div>
        
        <button className="createBtn"><Link to="form" spy={true} smooth={true} duration={500}>Create my chat icon</Link></button>
        <button className="learnMore">Learn more</button>
        </div>
        <div className="right">
        <img src="/images/magic.gif" alt="magic" className="magicImage" />
        </div>
        
        </div>
     );
}
 
export default Home;