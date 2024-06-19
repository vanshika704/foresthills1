import { Tabs, TabList, Tab, TabIndicator, Spacer } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaUserFriends } from "react-icons/fa";
import "../index.css";
import { MdFamilyRestroom } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
function Rooms() {
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
            
            <div className='typesroomsbar'>
               
              
                    <Tabs position='relative' variant='unstyled' height={5} width={40}>
                        <TabList>
                            <Tab className="tab-item1" paddingY={1} paddingX={3}>
                            <MdFamilyRestroom /><Spacer width="20px" />   Family 
                            </Tab>
                            <Tab className="tab-item1" paddingY={1} paddingX={3}>
                            <FaUserFriends /><Spacer width="20px" /> Friends
                            </Tab>
                            <Tab className="tab-item1" paddingY={1} paddingX={3}>
                            <IoMdHeart /> <Spacer width="20px" /> Couples
                            </Tab>
                        </TabList>
                        <TabIndicator mt='-1.5px' height='2px' width='calc(100% / 3)' bg='green.500' borderRadius='1px' />
                       
                    </Tabs>
          
            </div>
        </>
    );
}

export default Rooms;
