// components/HeaderComp.tsx
import React from "react";
import { Box, Text, VStack, Stack } from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import the GitHub and LinkedIn icons

const MotionBox = motion(Box);

const HeaderComp = () => {
  const variants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
  };

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={variants}
      textAlign="center"
      display="flex" // Use flex display
      flexDirection="column" // Stack items vertically
      justifyContent="space-between" // Space items evenly
      height="100%" // Expand to full height
    >
      <VStack spacing={1}>
        <Text fontSize="2xl" fontWeight="bold">
          Fabiel Ramirez Garcia
        </Text>
        <Text fontSize="lg" color="gray.500">
          Software Engineer
        </Text>
      </VStack>
      <Stack direction="row" spacing={4} align="center" justify="center">
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
      <Stack
        direction={"row"}
        align="center"
        justify="center"
        spacing={4}
        marginBottom="16px"
      >
        <NavButton to="/in/">About</NavButton>
        <NavButton to="/in/portfolio">Portfolio</NavButton>

        {/* Add more navigation links as needed */}
      </Stack>
    </MotionBox>
  );
};

interface NavButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton = ({ to, children }: NavButtonProps) => {
  return (
    <Link to={to} color="blue.500">
      {children}
    </Link>
  );
};

export default HeaderComp;
