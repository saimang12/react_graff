import "slick-carousel/slick/slick.css";
import ProductSlide from "react-slick";
import { DEFAULT_SECTION, DEFAULT_CONTENTS, Inner } from "./common";
import styled from "styled-components";
import { useRef } from "react";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";

const H2 = styled.h2`
font-size: 30px;
font-weight: 700;
margin: 0 0 10px 0;
`
const Desc = styled.p`
font-size: 14px;
margin: 0 0 30px 0;
`

const SlideWrapper = styled.div`
position: relative;
margin: 0 -10px;
`

const SlideItm = styled.div`

`

const Figure = styled.figure`
margin: 0 10px 20px 10px;
`

const FigDescription = styled.strong`
`

const Img = styled.img`
max-width: 100%;
`

const Dots = styled.ul`
display: flex;
justify-content: center;
align-items: center;
gap: 4px;

height: 50px;
`
const DotsItm = styled.li`
width: 20px;
height: 20px;
background: tomato;
color: #fff;
line-height: 20px;
border-radius: 50%;
user-select: none;
font-size: 10px;
`

const Arrows = styled.ul`

`

const ArrowLeft = styled.li`
position: absolute;
inset: 50% 0 0 50%;
transform: translate(-50%,-50%);
margin: 0 0 0 -700px;
`
const ArrowRight = styled.li`
position: absolute;
inset: 50% 0 0 50%;
transform: translate(-50%,-50%);
margin: 0 0 0 700px;
`





const MainProduct = ({ DEFAULT_PRODUCT, DEFAULT_CONTENTS }) => {

    const slide = useRef(null);

    const option = {
        arrows: false,
        slidesToShow: 5
    }
    return (
        <DEFAULT_SECTION>
            <H2>{DEFAULT_CONTENTS[0].title}</H2>
            <Desc>{DEFAULT_CONTENTS[0].description}</Desc>
            <Inner>
                <SlideWrapper>
                    <ProductSlide {...option} ref={slide}>
                        {
                            DEFAULT_PRODUCT.map((itm, idx) => {
                                return (
                                    <SlideItm key={idx}>
                                        <Figure>
                                            <Img src={`${process.env.PUBLIC_URL}/assets/lesedilarona0${idx + 1}.jpg`} alt={itm.description} />
                                        </Figure>
                                        <FigDescription>{itm.title}</FigDescription>
                                    </SlideItm>
                                )
                            })
                        }
                    </ProductSlide>
                    <Dots>
                        {
                            DEFAULT_PRODUCT.map((_, idx) => {
                                return <DotsItm onClick={() => slide.current.slickGoTo(idx)} key={idx}>
                                    {idx + 1}
                                </DotsItm>
                            })
                        }
                    </Dots>
                    <Arrows>
                        <ArrowLeft><BsArrow90DegLeft onClick={() => slide.current.slickPrev()} /></ArrowLeft>
                        <ArrowRight><BsArrow90DegRight onClick={() => slide.current.slickNext()} /></ArrowRight>
                    </Arrows>
                </SlideWrapper>
            </Inner>
        </DEFAULT_SECTION>
    )
}

export default MainProduct;