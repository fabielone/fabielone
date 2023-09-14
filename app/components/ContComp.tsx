// components/ContactForm.tsx
import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Button,
  Container, // Import Container from Chakra UI
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const ContComp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add code here to send email (typically on the server)
    // You would need to set up a backend service for this functionality
  };

  return (
    <Container maxWidth="lg">
      {" "}
      {/* Use Chakra UI's Container component to control width */}
      <MotionBox
        initial={{ translateY: "100%", opacity: 0 }}
        animate={{ translateY: "0%", opacity: 1 }}
        transition={{ duration: 0.5 }}
        p={4}
      >
        <form onSubmit={handleSubmit}>
          <VStack spacing={2}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue">
              Send Message
            </Button>
          </VStack>
        </form>
      </MotionBox>
    </Container>
  );
};

export default ContComp;
