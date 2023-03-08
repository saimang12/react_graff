import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEFAULT_SECTION, Inner } from "./common";

const FInner = styled.div`
display: flex;
gap: 30px;
width: 1200px;
margin: 0 auto;
text-align: left;
`

const FItm = styled.div`
flex: 1;
`

const Img = styled.img`
max-width: 100%;
`

const TabContent = styled.ul`

`
const TabMenu = styled.ul`
display: flex;
margin: 0 0 10px 0;
`
const TabMenuItm = styled.li`
flex:1;
padding: 10px 0 10px 10px;
background: tomato;
color: #fff;
user-select: none;
cursor: pointer;

&.on {
    background: #333333;
}
`

const TabItm = styled.li`
line-height: 40px;
border-bottom: 1px solid #ddd;
`

const MainTab = ({ notice, event }) => {
    const [num, setNum] = useState(0);

    const Notice = () => {
        return (
            <TabContent>
                {
                    notice.content.slice(0, 5).map((poem, idx) => {
                        return <TabItm key={idx}><Link>{poem.subject.substr(0, 20)} {poem.subject.length > 19 ? '...' : ''}</Link></TabItm>
                    })
                }
            </TabContent>
        )
    }
    const Event = () => {
        return (
            <TabContent>
                {
                    event.content.slice(0, 5).map((poem, idx) => {
                        return <TabItm key={idx}><Link>{poem.subject.substr(0, 20)} {poem.subject.length > 19 ? '...' : ''}</Link></TabItm>
                    })
                }
            </TabContent>
        )
    }

    const tabContent = [
        <Notice />,
        <Event />,
    ]
    return (
        <DEFAULT_SECTION gBg>
            <FInner>
                <FItm>
                    <TabMenu>
                        <TabMenuItm onClick={() => setNum(0)} className={num === 0 ? 'on' : ''}>{notice.title}</TabMenuItm>
                        <TabMenuItm onClick={() => setNum(1)} className={num === 1 ? 'on' : ''}>{event.title}</TabMenuItm>
                    </TabMenu>
                    <div>{tabContent[num]}</div>
                </FItm>
                <FItm>
                    <Img src={`${process.env.PUBLIC_URL}/assets/mainvisual01.jpg`} alt="" />
                </FItm>
            </FInner>
        </DEFAULT_SECTION>
    )
}

export default MainTab