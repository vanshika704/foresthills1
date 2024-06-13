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
        rounded: 'md', 
        overflow: 'hidden',
        fontSize: '20px', 
        cursor: 'pointer',
        boxShadow: 'xl', 
        _hover: {
          transform: 'scale(1.05)', 
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
          <SimpleGrid spacing={6} templateColumns='repeat(3, 1fr)'>
            <Box as={Link} to='/family-room' maxW='400px'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/family/mainpicfamilyroom.jpeg' alt='Family Room' boxSize='350px' objectFit='cover' />
                  <Heading size='lg'>Family Room</Heading>
                  <Text fontSize='lg'>4 People Occupancy</Text>
                  <Text fontSize='lg'>Rollaway bed</Text>
                </CardBody>
              </Card>
            </Box>
            <Box as={Link} to='/friends-room' maxW='400px'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/friend/1.png' alt='Friends Room' boxSize='350px' objectFit='cover' />
                  <Heading size='lg'>Friends Room</Heading>
                  <Text fontSize='lg'>2 People Occupancy</Text>
                  <Text fontSize='lg'>Rollaway bed</Text>
                </CardBody>
              </Card>
            </Box>
            <Box as={Link} to='/couple-room' maxW='400px'>
              <Card>
                <CardBody>
                  <Image src='src/assets/rooms/couple/4.png' alt='Couple Room' boxSize='350px' objectFit='cover' />
                  <Heading size='lg'>Couple Room</Heading>
                  <Text fontSize='lg'>2 People Occupancy</Text>
                  <Text fontSize='lg'>Rollaway bed</Text>
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
