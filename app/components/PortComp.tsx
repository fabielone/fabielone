import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
} from "@chakra-ui/react";

// Define a type or interface for your project data
interface Project {
  title: string;
  techStack: string;
  imageUrl: string;
  description: string;
}

const PortfolioItem: React.FC<{ project: Project }> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      p={4}
      boxShadow="md"
      rounded="md"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Image src={project.imageUrl} alt={project.title} rounded="md" />
      <Text fontSize="lg" fontWeight="bold" mt={2}>
        {project.title}
      </Text>
      <Text fontSize="md" color="gray.500">
        Tech Stack: {project.techStack}
      </Text>
      <Button onClick={toggleModal} colorScheme="blue" mt={2}>
        Read More
      </Button>

      {/* Modal for detailed project description */}
      <Modal isOpen={isOpen} onClose={toggleModal} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{project.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="lg">{project.title}</Text>
            <Text fontSize="md" color="gray.500" mt={2}>
              Tech Stack: {project.techStack}
            </Text>
            <Image src={project.imageUrl} alt={project.title} mt={4} />
            <Text fontSize="md" mt={4}>
              {project.description}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={toggleModal}>
              Close
            </Button>
            {/* Add any additional buttons or actions */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Portfolio: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <Stack spacing={4} direction={["column", "column", "column", "row"]}>
      {projects
        .slice(0, showAll ? projects.length : 3)
        .map((project, index) => (
          <PortfolioItem key={index} project={project} />
        ))}
      {projects.length > 3 && (
        <Button onClick={toggleShowAll} colorScheme="blue">
          {showAll ? "Show Less" : "Show More"}
        </Button>
      )}
    </Stack>
  );
};

export default Portfolio;
