import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"


const Header = ({ siteTitle }) => {
	
	const [isToggled, setToggled] = useState(false);
	const toggleNav = () => setToggled(!isToggled);

	return (
		<>
            <header className="header">
                <div className="header-inner">
                    <Link to="/"><h1>{siteTitle}</h1></Link>
                    <div 
                        className={isToggled ? 'active icon' : 'icon'} 
                        onClick={toggleNav} >
                        <div className="hamburger"></div>
                    </div>
                </div>
            </header>
            <nav className={!isToggled ? 'close' : ''}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blog/">Blog</Link></li>
                    <li><Link to="/#home-contact">Portfolio</Link></li>
                    <li><Link to="/#home-contact">Contact</Link></li>
                </ul>
            </nav>
		</>
	)
} 

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
