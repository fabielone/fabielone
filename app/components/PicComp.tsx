// components/PicComp.tsx
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProfilePic from "./../../public/assets/profile.jpg";

const MotionBox = motion(Box);

const PicComp = () => {
  // Define responsive breakpoints for component layout
  const imageWidth = useBreakpointValue({
    base: "100px",
    sm: "150px",
    md: "200px",
  });

  return (
    <MotionBox
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      py={3}
      maxW={imageWidth} // Responsive image width
      textAlign="center"
    >
      <Image
        src={ProfilePic}
        minW={["31vw", "24vw", "18vw", "10vw"]}
        maxW={["31vw", "24vw", "10vw", "10vw"]}
        fallbackSrc={"https://via.placeholder.com/150"}
        alt="Your Name"
        rounded="full"
        border="5px solid #9E9E9E"
      />
    </MotionBox>
  );
};

export default PicComp;
