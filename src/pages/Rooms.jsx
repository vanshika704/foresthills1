import { Tabs, TabList, Tab, TabIndicator, Spacer, Grid, GridItem } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle, FaUserFriends } from 'react-icons/fa';
import { MdFamilyRestroom } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import '../index.css';
import { FaWifi } from "react-icons/fa";
import { PiNumberFourBold } from "react-icons/pi";
import { LuBed } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
function Rooms() {
  return (
    <>
      <div className="navbar1">
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
            <Tab as={Link} to="/rooms" className="tab-item1" paddingY={1} paddingX={3}>
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

      <div className='resttax1'>Family Deluxe Room</div>
      <div className='familyphotos'>
        <Grid
          h="400px"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
        >
          <GridItem borderRadius="20px" rowSpan={2} colSpan={2} bg="tomato">
            <img src='src/assets/rooms/family/mainpicfamilyroom.jpeg' alt='Family Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius="20px" colSpan={1} rowSpan={1} bg="papayawhip">
            <img src='src/assets/rooms/family/PIC 1.png' alt='Family Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius="20px" colSpan={1} rowSpan={1} bg="papayawhip">
            <img src='src/assets/rooms/family/PIC 2.png' alt='Family Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius="20px" colSpan={1} rowSpan={1} bg="papayawhip">
            <img src='src/assets/rooms/family/PIC 3.png' alt='Family Room' className='grid-image' />
          </GridItem>
          <GridItem borderRadius="20px" colSpan={1} rowSpan={1} bg="papayawhip">
            <img src='src/assets/rooms/family/PIC4.jpeg' alt='Family Room' className='grid-image' />
          </GridItem>
        </Grid>
      </div>

      <div className='lefttext'>
        <div className='boldtext1'>Comfort Craft</div>
        <div className='boldtext1'>Elevating Stays with Signature Features</div>
        <div className='boldtext1'>(Large Rooms)</div>

        <div className='nobold1'>
          Designed for comfort, our Family Deluxe Room accommodates up to 4 guests.
          <br /><Spacer height={5}/>
          Enjoy the convenience of room service, with charges applicable.
          <br /><Spacer height={5}/>
          Stay connected with complimentary WiFi services during your stay.
          <br /><Spacer height={5}/>
          Revel in the beauty of your surroundings with a picturesque view from the room.
          <br /><Spacer height={5}/>
          Two stylish sofas and a table enhance the ambiance, providing a cozy seating area.
          <br /><Spacer height={5}/></div>
         <div className='boldtext1'>Need extra sleeping arrangements? Additional mattresses are<br/> available to ensure a comfortable stay for everyone.</div> 
          <Spacer height={5}/> 
      </div>
      <div className="card">
      <h1>₹ 4,500</h1>
      <h2>Night</h2>
      <p><FaWifi className="icon" /> Wifi Included</p>
      <p><PiNumberFourBold className="icon" /> 4 members Allowed</p>
      <p><LuBed className="icon" /> Duo Delight Retreats</p>
      <div className="buttons">
        <button className="button book-now"><FaRegCalendarCheck className="icon" /> Book Now</button>
        <button className="button more-info"><FaWhatsapp className="icon" /> Contact Us</button>
      </div>
    </div>

    </>
  );
}

export default Rooms;
