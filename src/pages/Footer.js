import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const FooterWrapper = styled.footer`
background: #333;
color: #fff;
`
const FooterTop = styled.div`
border-bottom: 1px solid #555;
`
const FooterBottom = styled.div`
height: 80px;
`
const FInner = styled.div`
display: flex;
justify-content: space-between;
width: 1200px;
margin: 0 auto;
`

const UL = styled.ul`
display: flex;
gap: 30px;
align-items: center;
height: 80px;
`

const LI = styled.li`
position: relative;
&~&::after {
    content:"";
    position: absolute;
    inset: 50% auto auto -15px;
    transform: translate(-50%, -50%);
    width: 1px;
    height: 12px;
    background: #ddd;
}
`

const SnsWrapper = styled.div`
display: flex;
gap: 10px;
align-items: center;
height: 80px;
font-size: 30px;
`

const Address = styled.address`
display: flex;
align-items: center;
height: 80px;
font-style: normal;
`

const FamilyLinkWrapper = styled.div`
display: flex;
align-items: center;
height: 80px;
`

const Select = styled.select`
background: #333;
`

const FooterAddress = ({ DEFAULT }) => {
    return (
        <Address>
            주소 : {DEFAULT.address} 전화 : {DEFAULT.tel}
        </Address>
    )
}

const FooterService = ({ DEFAULT }) => {
    return (
        <UL>
            {
                DEFAULT.service.map((service, idx) => {
                    return (
                        <LI><Link to={service.lnk}>{service.title}</Link></LI>
                    )
                })
            }
        </UL>
    )
}

const FooterSns = () => {
    return (
        <SnsWrapper>
            <a href="/" target="_blank"><BsInstagram /></a>
            <a href="/" target="_blank"><BsFacebook /></a>
        </SnsWrapper>
    )
}

const linkOpen = e => {
    const link = e.target.value;
    link && window.open(link)
}

const FooterLink = ({ DEFAULT }) => {
    return (
        <FamilyLinkWrapper>
            <Select onChange={linkOpen}>
                {
                    DEFAULT.familyLink.map((it, idx) => {
                        return (
                            <option value={it.link}>{it.title}</option>
                        )
                    })
                }
            </Select>
        </FamilyLinkWrapper>
    )
}

const Footer = ({ DEFAULT }) => {
    //console.log(props.DEFAULT);
    //const { DEFAULT } = props;
    //console.log(DEFAULT);
    return (
        <FooterWrapper>
            <FooterTop>
                <FInner>
                    <FooterService DEFAULT={DEFAULT} />
                    <FooterSns />
                </FInner>
            </FooterTop>
            <FooterBottom>
                <FInner>
                    <FooterAddress DEFAULT={DEFAULT} />
                    <FooterLink DEFAULT={DEFAULT} />
                </FInner>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer;