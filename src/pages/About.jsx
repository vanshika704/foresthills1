import { Tabs, TabList, Tab, TabIndicator } from '@chakra-ui/react';
import { FaHome, FaUtensils, FaBed, FaImages, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import GreenLast from './greenlast';

function About() {
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
      <div className='aboutcontent'>
        <div className='about'>Forest Hill Retreat</div>
        <div className='boldtext2'>Where Nature Beckons and Hospitality Embraces</div>
        <br/>
        <br/>
        <div className='boldtext'>
          Discover Serenity at Forest Hill, a captivating hotel cum cottage nestled 12 km away from the vibrant city of Shimla. Perched on the outskirts,<br/> amidst the serene hills and mountains, Forest Hill offers a breath-taking escape from the hustle and bustle of city life. Immerse yourself in the enchanting<br/> beauty of nature, with every glance revealing a picturesque landscape.
          <br/><br/>
          Our haven not only provides a tranquil retreat but also tantalizes your taste buds with delicious local cuisine, making you feel truly connected <br/>to the hills. Forest Hill Hotel is more than an escape; it&apos;s an invitation to experience the harmony of nature and the warmth of mountain hospitality.
        </div>
      </div>
      <GreenLast />
    </>
  );
}

export default About;
