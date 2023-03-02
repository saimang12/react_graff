import { Link } from "react-router-dom"
import styled from "styled-components";
import { Inner } from "./common"
import GlobalNav from "./GlobalNav";



const Header = ({ DEFAULT, NAV }) => {
    return (
        <header className="header">
            <Inner className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/grafflogo.png'} alt={DEFAULT.company} />
                    </Link>
                </h1>
                <nav className="GlobalGnb">
                    <GlobalNav NAV={NAV} />
                </nav>
            </Inner>
        </header>
    )
}

export default Header;