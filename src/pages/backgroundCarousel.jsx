
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from "../assets/homes/1.jpeg";
import slide2 from "../assets/homes/2.jpeg";
import slide3 from "../assets/gallery/restaurant/3.jpeg";
import slide4 from "../assets/gallery/restaurant/4.jpeg";
import slide5 from "../assets/gallery/picks/1.jpeg";
import slide6 from "../assets/gallery/picks/2.jpeg";
import slide7 from "../assets/gallery/picks/3.jpeg";
import slide8 from "../assets/gallery/picks/4.jpeg";
import "../index.css";

const Gallery = () => {
  const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8];

  const items = images.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Slide ${index + 1}`} className="sliderimg" />
    </div>
  ));

  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <div className="gallery-container">
      <AliceCarousel
        items={items}
        responsive={responsive}
        autoPlay
        autoPlayInterval={2000}
        infinite
        mouseTracking
        disableButtonsControls
        disableDotsControls
        fadeOutAnimation
        fadeOutDuration={1000}
        disableAutoPlayOnAction={true}
        duration={800} 
        autoPlayStrategy="none"
        autoWidth 
       
      />
    </div>
  );
};

export default Gallery;
