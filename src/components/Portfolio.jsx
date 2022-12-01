import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from "react-bootstrap";
import "../css/Portfolio.css"
import Card1 from "../Card/Card1";
import Card2 from "../Card/Card2";
const Page2 = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,

      };


    return (  
                <Slider className="com" {...settings}>
                  <div className="imgDiv">
                    <Card1 className="img1"/>
                  </div>
                  <div className="imgDiv">
                    <Card2 id="asd" />
                  </div>
                  <div className="imgDiv">
                    <Card1 />
                  </div>
                  <div className="imgDiv">
                    <Card1 />
                  </div>
                  <div className="imgDiv">
                    <Card1 />
                  </div>
                  <div className="imgDiv">
                    <Card1 />
                  </div>
              </Slider>
                      
                      );
                      {/* <h1 style={{
                  position: "absolute",
                  top: "100px"

                }}>그림이다아~</h1> */}


}

export default Page2;