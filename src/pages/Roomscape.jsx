import { Card, CardBody, SimpleGrid, Heading, Text, Image, Box } from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Card: {
      baseStyle: {
        rounded: 'md', // Medium rounded corners
        overflow: 'hidden',
        fontSize: '20px', // Increase the size
        cursor: 'pointer', // Make the card look clickable
        _hover: {
          transform: 'scale(1.05)', // Slightly enlarge card on hover
          transition: 'transform 0.2s ease-in-out',
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'rgb(70, 82, 38)',
      },
    },
    Heading: {
      baseStyle: {
        color: 'rgb(70, 82, 38)',
      },
    },
  },
});

function Roomscape() {
  return (
    <ChakraProvider theme={theme}>
      <div className="roomscape">
        <div className="Roomscape">&quot;Roomscape&quot;</div>
        <div className="line2">&quot;Five Rooms, Five Worlds: Tailored Experiences Awaits Your Stay.&quot;</div>
        <div className="Roomtypes">
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(240px, 1fr))'>
            <Box as={Link} to='/family-room'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/family/mainpicfamilyroom.jpeg' alt='Family Room' />
                  <Heading size='md'>Family Room</Heading>
                  <Text>4 People Occupancy</Text>
                  <Text>Rollaway bed</Text>
                </CardBody>
              </Card>
            </Box>
            <Box as={Link} to='/friends-room'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/friend/1.png' alt='Friends Room' />
                  <Heading size='md'>Friends Room</Heading>
                  <Text>2 People Occupancy</Text>
                  <Text>Rollaway bed</Text>
                </CardBody>
              </Card>
            </Box>
            <Box as={Link} to='/couple-room'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/couple/4.png' alt='Couple Room' />
                  <Heading size='md'>Couple Room</Heading>
                  <Text>2 People Occupancy</Text>
                  <Text>Rollaway bed</Text>
                </CardBody>
              </Card>
            </Box>
          </SimpleGrid>
        </div>
      </div>
    </ChakraProvider>
  );
}

export default Roomscape;
