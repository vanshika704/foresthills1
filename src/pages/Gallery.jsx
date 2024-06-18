
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../index.css";

function GaLLery() {
    return (
        <>
            <div className='navbar1'>
                <Tabs position='relative' variant='unstyled' height={5} width={70}>
                    <TabList>
                        <Tab as={Link} to="/" className="tab-item" paddingY={1} paddingX={3}>
                            <FaHome />
                            Home
                        </Tab>
                        <Tab as={Link} to="/restaurant" className="tab-item" paddingY={1} paddingX={3}>
                            <FaUtensils />
                            Restaurants
                        </Tab>
                        <Tab as={Link} to="/rooms" className="tab-item" paddingY={1} paddingX={3}>
                            <FaBed />
                            Rooms
                        </Tab>
                        <Tab as={Link} to="/gallery" className="tab-item" paddingY={1} paddingX={3}>
                            <FaImages />
                            Gallery
                        </Tab>
                        <Tab as={Link} to="/about" className="tab-item" paddingY={1} paddingX={3}>
                            <FaInfoCircle />
                            About
                        </Tab>
                    </TabList>
                    <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
                </Tabs>
            </div>

            <div className='resttax'>Captured Tranquillity</div>
            <div className='nobold'>A Pictorial Symphony of Forest Hill&apos;s Natural Elegance</div>

            <div className='boldtext1'>Restaurant</div>
            <div className='restlastimg'>
                <img className='restaurantimage' src='src/assets/gallery/restaurant/1.jpeg' height={300} width={300} alt='Restaurant 1' />
                <img className='restaurantimage' src='src/assets/gallery/restaurant/2.jpeg' height={300} width={300} alt='Restaurant 2' />
                <img className='restaurantimage' src='src/assets/gallery/restaurant/3.jpeg' height={300} width={300} alt='Restaurant 3' />
                <img className='restaurantimage' src='src/assets/gallery/restaurant/4.jpeg' height={300} width={300} alt='Restaurant 4' />
            </div>

            <div className='boldtext1'>Rooms</div>
            <div className='restlastimg'>
                <img className='restaurantimage' src='src/assets/gallery/rooms/1.jpeg' height={200} width={300} alt='Room 1' />
                <img className='restaurantimage' src='src/assets/gallery/rooms/2.jpeg' height={200} width={300} alt='Room 2' />
                <img className='restaurantimage' src='src/assets/gallery/rooms/3.jpeg' height={200} width={300} alt='Room 3' />
                <img className='restaurantimage' src='src/assets/gallery/rooms/4.jpeg' height={200} width={300} alt='Room 4' />
            </div>

            <div className='boldtext1'>Scenic Nature</div>
            <div className='restlastimg'>
                <img className='restaurantimage' src='src/assets/gallery/nature/1.jpeg' height={200} width={300} alt='Nature 1' />
                <img className='restaurantimage' src='src/assets/gallery/nature/2.jpeg' height={200} width={300} alt='Nature 2' />
                <img className='restaurantimage' src='src/assets/gallery/nature/3.jpeg' height={200} width={300} alt='Nature 3' />
                <img className='restaurantimage' src='src/assets/gallery/nature/4.jpeg' height={200} width={300} alt='Nature 4' />
            </div>

            <div className='boldtext1'>Fresh Picks corner</div>
            <div className='restlastimg'>
                <img className='restaurantimage' src='src/assets/gallery/picks/1.jpeg' height={200} width={300} alt='Picks 1' />
                <img className='restaurantimage' src='src/assets/gallery/picks/2.jpeg' height={200} width={300} alt='Picks 2' />
                <img className='restaurantimage' src='src/assets/gallery/picks/3.jpeg' height={200} width={300} alt='Picks 3' />
                <img className='restaurantimage' src='src/assets/gallery/picks/4.jpeg' height={200} width={300} alt='Picks 4' />
            </div>
        </>
    );
}

export default GaLLery;
