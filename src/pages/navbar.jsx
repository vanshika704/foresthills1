
import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import "../index.css";

import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';

function NavBar() {
    return (
        <div className='navbar'>
            <Tabs position='relative' variant='unstyled' height={5} width={70}>
                <TabList>
                    <Tab paddingY={1} paddingX={3}>
                        <FaHome style={{ marginRight: '8px' }} />
                        Home
                    </Tab>
                    <Tab paddingY={1} paddingX={3}>
                        <FaUtensils style={{ marginRight: '8px' }} />
                        Restaurants
                    </Tab>
                    <Tab paddingY={1} paddingX={3}>
                        <FaBed style={{ marginRight: '8px' }} />
                        Rooms
                    </Tab>
                    <Tab paddingY={1} paddingX={3}>
                        <FaImages style={{ marginRight: '8px' }} />
                        Gallery
                    </Tab>
                    <Tab paddingY={1} paddingX={3}>
                        <FaInfoCircle style={{ marginRight: '8px' }} />
                        About
                    </Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
            </Tabs>
        </div>
    );
}

export default NavBar;
