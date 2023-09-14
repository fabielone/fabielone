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
  Container,
  Text
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
              <Text size="lg">Lets Collaborate!</Text>
              <Text size="lg"> Send me a message</Text>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                border={"1px solid gray"}
                size={["xs","xs","xs","sm"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                border={"1px solid gray"}
                size={["xs","xs","xs","sm"]}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                border={"1px solid gray"}
                size={["xs","xs","xs","sm"]}
              />
            </FormControl>
            <Button type="submit" bg={"#FF5722"} color={"white"}>
              Send Message
            </Button>
          </VStack>
        </form>
      </MotionBox>
    </Container>
  );
};

export default ContComp;
