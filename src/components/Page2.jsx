import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Col, Container, Row } from "react-bootstrap";
import "../css/page2.css"
const Page2 = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };

      const back = ([
        {img:"backgroundImg1.jpg"},
        {img:"backgroundImg2.jpg"},
        {img:"backgroundImg3.jpg"}
       ])

    return (  
        <Container>
            <Row>
              <Col>
                <Slider {...settings}>
                {back.map((back, index)=>(
                  <div className="map" key={index}>
                    <img
                    style={{

                      height :"300px",
                      width : "500px",
                      
                    }}
                    src={require(`../img/${back.img}`)} alt="" >
                    </img>
                      <h1 style={{
                  position: "absolute",
                  top: "100px"

                }}>dkdkdkd</h1>
                    
                    
                  </div>
                ))}
                <div>
                </div>
                </Slider>
              
              </Col>
            </Row>

        </Container>
    );
}
 
export default Page2;