
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import restaurant1 from '../assets/gallery/restaurant/1.jpeg';
import restaurant2 from '../assets/gallery/restaurant/2.jpeg';
import rooms1 from '../assets/gallery/rooms/1.jpeg';
import rooms2 from '../assets/gallery/rooms/2.jpeg';
import restaurantImage1 from '../assets/restaurentImages/g1.png';
import restaurantImage2 from '../assets/restaurentImages/g2.png';
import restaurantImage3 from '../assets/restaurentImages/g3.png';
import picks4 from '../assets/gallery/picks/4.jpeg';

const Gallery = () => {
  const items = [
    restaurant1,
    restaurant2,
    rooms1,
    rooms2,
    restaurantImage1,
    restaurantImage2,
    restaurantImage3,
    picks4,
  ];

  const renderedItems = items.map((item, index) => (
    <img key={index} src={item} alt={`image-${index}`} />
  ));

  return (
    <AliceCarousel
      animationType="fadeout"
      animationDuration={5000}
      disableButtonsControls
      disableDotsControls
      infinite
      autoPlay
      mouseTracking
      items={renderedItems}
    />
  );
};

export default Gallery;
