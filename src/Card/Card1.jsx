import Card from 'react-bootstrap/Card'
import './Card1.css';

const Card1 = () => {
    const cardInfo = [
        {
            image: require("../img/backgroundImg1.jpg"),
            title: "BMW",
            text: "HI"
        }
    ];
    const renderCard = (card, index) => {
        return (
            <>

            <br/>
            <Card className='Card-main'>
        <Card.Img  src={card.image} alt="" className='card-img'/>
        <Card.ImgOverlay>
            {/* <Card.Title className='Card-Title1'>BMW</Card.Title>
            <Card.Text className='Card-Text1'>BMW 3 Series</Card.Text>
        <Card.Text className='Card-Text1-2'>BMW 더뉴 3시리즈 2022년형</Card.Text> */}
        </Card.ImgOverlay>
    </Card>
        </>
        );
    };

    return (
        <div>
            {cardInfo.map(renderCard)}
        </div>
    )
}
 
export default Card1;