import GlobalNav from "./GlobalNav"

const Footer = ({ DEFAULT, NAV }) => {
    return (
        <footer>
            <GlobalNav NAV={NAV} />
        </footer>
    )
}

export default Footer;