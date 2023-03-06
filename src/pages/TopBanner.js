import styled from "styled-components";
import { Inner, BTN } from "./common";
import { BsX } from "react-icons/bs";
import { useState } from "react";

const TopBannerWapper = styled.div`
position: relative;
display: flex;
align-items: center;
background: #f9f9f9;
height: 100px;
overflow: hidden;
transition: height 0.5s;

&.on {
    height: 0; 
}

h2 {
    font-size: 20px;
    font-weight: 500;
    margin: 0 0 5px 0;
}

button {
    margin: 0 0 0 20px;
}

.x {
    position: absolute;
    inset: 50% auto auto 50%;
    margin: 0 0 0 600px;
    transform: translate(-100%,-50%);
    font-size: 30px;
}

`

const TopBanner = ({ DEFAULT_CONTENTS }) => {
    const [on, setOn] = useState(false);
    return (
        <TopBannerWapper className={on ? 'on' : ''}>
            <Inner>
                <h2>{DEFAULT_CONTENTS[0].title}</h2>
                <p>{DEFAULT_CONTENTS[0].description} <BTN>more</BTN></p>
            </Inner>
            <BsX className="x" onClick={() => setOn(true)} />
        </TopBannerWapper>
    )
}

export default TopBanner;