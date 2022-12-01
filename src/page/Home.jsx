import { useEffect, useRef } from "react";
import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Portfolio from "../components/Portfolio";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
    const settings2 = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrow: false,
        vertical: false,
        arrows: false,
        infinite: false,
        draggable: false,
      };
    
      const slider = useRef(null);
    
      function scroll(e) {
        if (slider === null) return 0;
        e.wheelDelta > 0 ? slider.current.slickPrev() : slider.current.slickNext();
      }
    
      useEffect(() => {
        window.addEventListener("wheel", scroll, true);
        return () => {
          window.removeEventListener("wheel", scroll, true);
        };
      }, []);


    return (  
        <div className="slick-div">
            <div className="arrow"></div>
            <div id="container">
                <div id="container2">
                <Slider className="Main-slick" {...settings2} ref={slider}>
                    <div className="box one"><div><Aboutus /></div></div>
                    <div className="box two"><div><Portfolio /></div></div>
                    <div className="box three"><div><Contactus /></div></div>
               </Slider>
                </div>
            </div>
            <div className="Scroll-txt">Scroll</div>
            <img src={require("../img/logo_white.png")} className="logo" width="170" alt="" />
            
        </div>
    );
}

export default Home;