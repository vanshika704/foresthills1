import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../index.css";
import { LuChefHat } from "react-icons/lu";
import { FaBellConcierge } from "react-icons/fa6";
import { CgPlayListCheck } from "react-icons/cg";
import { IoPeople } from "react-icons/io5";
import { RiGalleryLine } from "react-icons/ri";
import GreenLast from './greenlast';
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
           <div className='lists'><div className='boldtext'><LuChefHat />Professional Chef</div>
            <div className='nobold'>Our culinary team is led by a highly skilled and professional chef.</div>
            <div className='boldtext'><FaBellConcierge />Cuisine Offerings</div>
           <div className='nobold'>We specialize in diverse cuisines, including Indian, Himachali, and Chinese</div>
           <div className='boldtext'><CgPlayListCheck />Ordering Convenience:</div>
           <div className='nobold'>Enjoy the ease of ordering from our menu, designed to cater to your culinary preferences.</div>
           <div className='boldtext'><IoPeople />Seating Capacity</div> 
           <div className='nobold'>With a spacious setting, our restaurant offers seating for 40+, ensuring a dining experience.</div>
           <div className='boldtext'><RiGalleryLine />Scenic Ambiance</div>
           <div className='nobold'>Take in the natural beauty through our expansive windows, providing a view of the nature.</div>
           </div>
          
          
           </div> <div className='resttax'>Feast Your Eyes</div><div className='restlastimg'><img className='restaurantimage' src='src/assets/gallery/restaurant/1.jpeg' height={100} width={250}></img>
           <img className='restaurantimage' src='src/assets/gallery/restaurant/2.jpeg' height={100} width={250}></img>
           <img className='restaurantimage' src='src/assets/gallery/restaurant/3.jpeg' height={100} width={250}></img>
           <img className='restaurantimage' src='src/assets/gallery/restaurant/4.jpeg' height={100} width={250}></img></div> <GreenLast/> </>
    );
}

export default Restaurant;
