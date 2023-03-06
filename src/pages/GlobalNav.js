import { Link } from "react-router-dom";

const GlobalNav = ({ NAV }) => {
    return (
        <ul>
            {
                NAV.map(it => {
                    return (
                        <li key={it.id}>
                            <Link to={it.link}>{it.title}</Link>
                            {
                                it.submenu &&
                                <ul>
                                    {
                                        it.submenu.map((it, idx) => {
                                            return (
                                                <li key={idx}><Link to={it.link}>{it.title}</Link></li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

//conponents
{/* <Aside toggle={loginOn}>
	안녕하세요
</Aside>



//style
export const Aside = styled.aside`
    position:fixed;
    right:0;
    top:0; 
    z-index:9;
    width:50vw;
    height:100%;
    padding:2rem;
    background:#fff;
    transform:${props=>(props.toggle ? 'translateX(0)': 'translateX(100%)')};
    transition:all .5s ease;
    box-sizing:border-box;
`
   */}

export default GlobalNav;