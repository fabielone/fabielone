import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface MainPageProps {
  children: React.ReactNode;
}

const MainPage = (props: MainPageProps) => {
  return (
    <Box
      backgroundColor="gray.200"
      position="absolute"
      top="30px"
      bottom="30px"
      left="30px"
      right="30px"
      border="1px solid grey"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
      >
        {props.children}
      </motion.div>
    </Box>
  );
};

export default MainPage;
