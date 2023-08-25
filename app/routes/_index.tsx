import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

import {
  Box,
  Flex,
  Heading,
  Text,
  Badge,
  Image,
  Link as ChakraLink,
  VStack,
  Divider,
  Icon,
  Grid,
} from "@chakra-ui/react";

import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

export const meta: V2_MetaFunction = () => [{ title: "Blinds Baja" }];

export default function Index() {

  return(
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Box p="4" maxW="600px" width="100%">
        <Grid templateColumns="1fr 2fr" gap="4">
          <Box>
            <Image src="/profile-image.jpg" alt="Profile" borderRadius="full" boxSize="150px" />
          </Box>
          <VStack align="start" spacing="2">
            <Heading as="h1" size="xl">
              Fabiel Ramirez
            </Heading>
            <Text>Full Stack Developer</Text>
            <Flex align="center">
              <Icon as={FaMapMarkerAlt} mr="1" />
              <Text>Ensenada, Mexico</Text>
            </Flex>
            <Flex align="center">
              <Icon as={FaEnvelope} mr="1" />
              <ChakraLink href="mailto:fabiel@example.com">fabiel@example.com</ChakraLink>
            </Flex>
            <Flex align="center">
              <Icon as={FaPhone} mr="1" />
              <Text>+123-456-7890</Text>
            </Flex>
          </VStack>
        </Grid>
        <Divider my="4" />
        <Box>
          <Heading as="h2" size="lg" mb="2">
            Skills
          </Heading>
          <Flex wrap="wrap">
            <Badge colorScheme="blue" mr="2" mb="2">
              React.js
            </Badge>
            <Badge colorScheme="green" mr="2" mb="2">
              Node.js
            </Badge>
            <Badge colorScheme="purple" mr="2" mb="2">
              Chakra UI
            </Badge>
            {/* Add more skills here */}
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};



