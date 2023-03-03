import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { Inner, BTN } from "./common";

const MainVisual = ({ DEFAULT_CONTENTS }) => {
    const option = {
        arrows: false,
        afterChange: (idx) => {
            console.log(idx)
            setSNum(idx)
        }
    }
    //document.queryselector
    const s = useRef(null);
    const [sNum, setSNum] = useState()

    useEffect(() => {
        setSNum(0);

    }, [])

    return (
        <section className="MainVisual">
            <MainSlide {...option} ref={s} className="MainSlide">
                {
                    DEFAULT_CONTENTS.map((it, idx) => {
                        return (
                            <div key={idx} className={`itm itm0${idx + 1} ${idx === sNum ? 'on' : ''}`}>
                                <Inner className="inner">
                                    <h2>{it.title}</h2>
                                    <p>{it.description}</p>
                                    <BTN color={it.color}><Link to='/'>more</Link></BTN>
                                </Inner>
                            </div>
                        )
                    })
                }

            </MainSlide>
            <div className="tab">
                {DEFAULT_CONTENTS[sNum]?.title}
            </div>
            <div className="arrows">
                <button onClick={() => s.current.slickPrev()}>뒤로가기</button>
                <button onClick={() => s.current.slickNext()}>앞으로가기</button>
                {console.log(s.current)}
            </div>
            <div className="num">
                {sNum + 1} / {DEFAULT_CONTENTS.length}
            </div>
            <ul className="dots">
                {
                    DEFAULT_CONTENTS.map((_, idx) => {
                        return (
                            <li className={`${idx + 1} ${idx === sNum ? 'on' : ''}`}>
                                <button onClick={() => { s.current.slickGoTo(idx) }}>{idx + 1}</button>
                            </li>
                        )
                    })
                }
            </ul>

        </section>
    )
}

export default MainVisual;