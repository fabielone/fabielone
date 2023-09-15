// src/Portfolio.tsx
import * as React from 'react';
import { motion } from 'framer-motion';
import { Box, Flex, Image, Text, VStack, Wrap, WrapItem, Button } from '@chakra-ui/react';
import { PortfolioItem, portfolioItems } from './portfoliotype';


const Portfolio: React.FC = () => {
  const [filteredItems, setFilteredItems] = React.useState<PortfolioItem[]>(portfolioItems);
  const [activeTag, setActiveTag] = React.useState<string>('all');

  const filterItems = (tag: string) => {
    setActiveTag(tag);
    if (tag === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter((item) => item.tags.includes(tag)));
    }
  };

  const tags = ['all', 'web', 'react','vue']; // Add more tags as needed

  return (
    <Box>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb="10">
        Portfolio
      </Text>
      <Wrap justify="center" spacing={4} mb={10}>
        {tags.map((tag, index) => (
          <WrapItem key={index}>
            <Button
              size="md"
              onClick={() => filterItems(tag)}
              variant={tag === activeTag ? 'solid' : 'outline'}
            >
              {tag}
            </Button>
          </WrapItem>
        ))}
      </Wrap>
      <Flex wrap="wrap" justifyContent="center">
        {filteredItems.map((item: PortfolioItem) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <VStack
              spacing={4}
              textAlign="center"
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              m={4}
              boxShadow="xl"
              _hover={{ boxShadow: '2xl' }}
            >
              <Image
                borderRadius="lg"
                boxSize="250px"
                src={item.image}
                alt={item.title}
                mb="4"
              />
              <Text fontSize="xl" fontWeight="bold">
                {item.title}
              </Text>
              <Text>{item.description}</Text>
            </VStack>
          </motion.div>
        ))}
      </Flex>
    </Box>
  );
};

export default Portfolio;