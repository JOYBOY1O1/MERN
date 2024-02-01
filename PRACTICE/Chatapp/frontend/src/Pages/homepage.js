import React from "react";
import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius={"1g"}
        borderWidth="1px"
      >
        <Text fontSize="4xl" color="white">
          Talk-A-Tive
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px"></Box>
    </Container>
  );
};

export default HomePage;
