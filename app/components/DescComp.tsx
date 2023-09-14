import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const DescComp: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MotionBox
      initial="hidden"
      animate="visible"
      variants={variants}
      position="relative"
      p={4}
     
    >
      <VStack spacing={4}>
        <Text fontSize="lg">
          Hello! 👋 I'm Fabiel Ramirez, a full-stack developer.
        </Text>
        <Text fontSize="md">
          I'm passionate about creating web applications that are user-friendly
          and efficient. My goal is to make technology accessible and enjoyable
          for everyone.
        </Text>
        <Text fontSize="md">
          I specialize in a variety of technologies, including:
        </Text>
        <Text fontSize="md">
          - React - Node.js - TypeScript - ASP.NET - C# -
        </Text>
        <Text fontSize="md">
          When I'm not coding, you can find me exploring the beautiful city of
          Ensenada or working on personal projects.
        </Text>
      </VStack>
    </MotionBox>
  );
};

export default DescComp;
