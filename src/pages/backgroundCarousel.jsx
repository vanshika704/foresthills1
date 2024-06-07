import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import slide1 from "../assets/gallery/restaurant/1.jpeg";
import slide2 from "../assets/gallery/restaurant/2.jpeg";
import slide3 from "../assets/gallery/restaurant/3.jpeg";
import "../index.css"; 

const Gallery = () => {
  const images = [slide1, slide2, slide3];

  const items = images.map((image, index) => (
    <img src={image} alt={`Slide ${index + 1}`} key={index} className="sliderimg" />
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
      />
    </div>
  );
};

export default Gallery;
