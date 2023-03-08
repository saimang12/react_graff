import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section`
padding: 100px 0;
text-align: center;
color: #fff;
text-shadow: 0 0 1px #000;
background: url(${process.env.PUBLIC_URL}/assets/mainvisual01.jpg) no-repeat fixed center center/cover;
`
const H2 = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0 0 10px 0;
`
const P = styled.p`
font-size: 14px;
margin: 0 0 30px 0;
`

const MoreWapper = styled.div`
font-size: 30px;
span {
    font-size: 14px;
    vertical-align: 10px;
    margin: 0 10px 0 0;
}
`

const MainBanner = ({ DEFAULT_CONTENTS }) => {

    return (
        <Section>
            <H2>{DEFAULT_CONTENTS[0].title}</H2>
            <P>{DEFAULT_CONTENTS[0].description}</P>
            <MoreWapper>
                <Link to="/">
                    <span>more</span> <BsFillArrowRightCircleFill />
                </Link>
            </MoreWapper>
        </Section>
    )
}

export default MainBanner;