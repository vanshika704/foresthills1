import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../index.css";

function Restaurant() {
    return (
        <>
           <div>  <div className='navbar1'>
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
        </div></div>
            <div className="resttax">
                Discover the Soul of Our Restaurant
            </div>
            <div className="imageandtext">
                <img className='Imagerest' src="src/assets/gallery/restaurant/1.jpeg" alt="Restaurant Image" height={400} width={500} />
            </div>
        </>
    );
}

export default Restaurant;
