import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import "../index.css";

function NavBar() {
    return (
        <div className='navbar'>
            <Tabs position='relative' variant='unstyled' height={5}>
                <TabList>
                    <Tab paddingY={1} paddingX={3}>Home</Tab>
                    <Tab paddingY={1} paddingX={3}>Restaurants</Tab>
                    <Tab paddingY={1} paddingX={3}>Rooms</Tab>
                    <Tab paddingY={1} paddingX={3}>Gallery</Tab>
                    <Tab paddingY={1} paddingX={3}>About</Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='green.500' borderRadius='1px' />
            </Tabs>
        </div>
    );
}

export default NavBar;
