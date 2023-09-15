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
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";


// Define a type or interface for your project data
interface Project {
  title: string;
  techStack: string;
  imageUrl: string;
  description: string;
  githubUrl: string;
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
      borderColor="gray.500"
      width={'90%'}
      placeItems={'center'}
    >
      <SimpleGrid columns={[2,2,2,1]} spacing={2}>
      <Box max-width={"fit-content"}>
      <Image src={project.imageUrl} alt={project.title} rounded="md" height={['100']} />
      <Text fontSize="lg" fontWeight="bold" mt={2}>
        {project.title}
      </Text>
      </Box>
      <Box>
      <Text fontSize="md" color="gray.500">
        Tech Stack: {project.techStack}
      </Text>
      <Text fontSize="md" mt={2}>
        GitHub: <Link to={project.githubUrl} >{project.githubUrl}</Link>
      </Text>
      <Button onClick={toggleModal} colorScheme="blue" mt={2}>
        View
      </Button>
      </Box>
      </SimpleGrid>

      
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
    <Stack spacing={4} direction={["column", "column", "column", "row"]} alignItems={"center"}>
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
