import { useState } from "react";


const MainTab = ({ DEFAULT_PRODUCT, DEFAULT_CONTENTS }) => {
    const [num, setNum] = useState(0);
    const tabContent = [
        <div>01 tabContent</div>,
        <div>02 tabContent</div>,
        <div>03 tabContent</div>,
    ]
    return (
        <div>
            <ul>
                {DEFAULT_CONTENTS.map((tab, idx) => {
                    return (
                        <li key={tab.id} onClick={() => { setNum(idx) }}>
                            {tab.title}
                        </li>
                    )
                })}
            </ul>
            <div>
                {tabContent[num]}
            </div>
        </div>
    )
}

export default MainTab;
