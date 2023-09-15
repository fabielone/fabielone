import {
    Box,
    //chakra,
    Container,
    //Link,
    SimpleGrid,
    Stack,
    Text,
    //VisuallyHidden,
    //Input,
    //IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
 // import type { ReactNode } from 'react';
 // import { BiMailSend } from 'react-icons/bi';
  //import logo from "../assets/logo1.png"
  

  
  
  
//   const ListHeader = ({ children }: { children: ReactNode }) => {
//     return (
//       <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
//         {children}
//       </Text>
//     );
//   };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box marginLeft={'-10px'}>
                {/* <img src={logo} /> */}
              </Box>
              <Text fontSize={'sm'}>
                © 2023 Fabiel Ramirez . All rights reserved
              </Text>
             </Stack>
            
             
          </SimpleGrid>
        </Container>
      </Box>
    );
  }