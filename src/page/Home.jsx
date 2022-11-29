import Aboutus from "../components/Aboutus";
import Contactus from "../components/Contactus";
import Page2 from "../components/Page2";
import "../css/Home.css";

const Home = () => {
    return (  
        <div>
            <div id="container">
            <div id="container2">
            <div class="box one"><div><Aboutus /></div></div>
            <div class="box two"><div><Page2 /></div></div>
            <div class="box three"><div><Contactus /></div></div>
            </div>
        </div>
        </div>
    );
}

export default Home;