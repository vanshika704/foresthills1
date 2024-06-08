
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import "../index.css";

import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';

function NavBar() {
    return (
        <div className='navbar'>
            <Tabs position='relative' variant='unstyled' height={5} width={70}>
                <TabList>
                    <Tab className="tab-item" paddingY={1} paddingX={3}>
                        <FaHome />
                        Home
                    </Tab>
                    <Tab className="tab-item" paddingY={1} paddingX={3}>
                        <FaUtensils />
                        Restaurants
                    </Tab>
                    <Tab className="tab-item" paddingY={1} paddingX={3}>
                        <FaBed />
                        Rooms
                    </Tab>
                    <Tab className="tab-item" paddingY={1} paddingX={3}>
                        <FaImages />
                        Gallery
                    </Tab>
                    <Tab className="tab-item" paddingY={1} paddingX={3}>
                        <FaInfoCircle />
                        About
                    </Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
            </Tabs>
        </div>
    );
}

export default NavBar;
