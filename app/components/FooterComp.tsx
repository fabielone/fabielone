import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import the GitHub and LinkedIn icons
import { Link } from "@remix-run/react";

const Footer = () => {
  return (
    <Box width={"100"} h="100%">
      <Stack direction={"row"} spacing={2}>
        <Text fontSize="lg" fontWeight="bold">
          Social Media :
        </Text>
        <Link
          to={"https://github.com/fabielone"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </Link>
        <Link
          to={"https://linkedin.com/in/fabielone"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </Link>
      </Stack>

      <Text mt={4} fontSize="sm" color="gray.600">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
