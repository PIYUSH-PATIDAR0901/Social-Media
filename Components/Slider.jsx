import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import React, { useState } from "react";
import { sliderItems } from "../Data";
import { mobile, Tablet } from "../Resonsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({display: 'none'})}
  ${Tablet({display: 'none'})}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  bottom: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100wh;
  background-color: #${props=>props.bg}
`;
const ImageConatiner = styled.div`
  flex: 1;
  height: 100%;
`;
const InfoConatiner = styled.div`
  flex: 1;
  padding: 40px;

`;

const Image = styled.img`
height: 80%;
margin-left: 80px;
`;

const Title = styled.h1`
  font-size: 60px;
`
const Desc = styled.p`
  margin: 45px 0px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;

`
const Button = styled.button`
  padding: 10px;
  font-soze: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
      if(direction === "left"){
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      }else{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex= {slideIndex}>
        {sliderItems.map((item)=>(

          <Slide bg={item.bg}>
        <ImageConatiner>
          <Image src={item.img} />
        </ImageConatiner>
        <InfoConatiner>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button>SHOP NOW</Button>
        </InfoConatiner>
        </Slide>
        ))}
        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
