import { Tabs, TabList, Tab, TabIndicator, Spacer } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle, FaUserFriends } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../index.css'; // Assuming you have some custom CSS for the classes used
import { Grid, GridItem } from '@chakra-ui/react';
function Couple(){
    return (<> <div className="navbar1">
        <Tabs position="relative" variant="unstyled" height={5} width={70}>
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
          <TabIndicator mt="-1.5px" height="2px" bg="green.500" borderRadius="1px" />
        </Tabs>
      </div>

      <div className="typesroomsbar">
        <Tabs position="relative" variant="unstyled" height={5} width={40}>
          <TabList>
            <Tab as={Link} to="/" className="tab-item1" paddingY={1} paddingX={3}>
              <MdFamilyRestroom />
              <Spacer width="20px" />
              Family
            </Tab>
            <Tab as={Link} to="/friends" className="tab-item1" paddingY={1} paddingX={3}>
              <FaUserFriends />
              <Spacer width="20px" />
              Friends
            </Tab>
            <Tab as={Link} to="/couple" className="tab-item1" paddingY={1} paddingX={3}>
              <IoMdHeart />
              <Spacer width="20px" />
              Couples
            </Tab>
          </TabList>
          <TabIndicator mt="-1.5px" height="2px" width="calc(100% / 3)" bg="green.500" borderRadius="1px" />
        </Tabs>
      </div>
      <div className='resttax1'>Cozy rooms for couples and friends</div>
      <div className='familyphotos'> <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem borderRadius={20} rowSpan={2} colSpan={2} bg="tomato" />
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip" />
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip" />
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip" />
          <GridItem borderRadius={20} colSpan={1} rowSpan={1} bg="papayawhip" />
        </Grid></div></>)
}
export default Couple;