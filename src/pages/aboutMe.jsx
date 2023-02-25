import React from "react";
import Image from "next/image";
import { Box, HStack, Flex, Text, VStack, Button } from "@chakra-ui/react";
import { Me } from "public";
import Link from "next/link";

const AboutMe = () => {
  return (
    <HStack bg="black" height="100vh">
      <Flex
        width="50%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={Me} width={500} alt="My Image" className="fade-in-fwd" />
      </Flex>
      <Flex
        height="100%"
        width="50%"
        color="white"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Text fontWeight="700" fontSize="1.2rem">
            WHO AM I
          </Text>
          <Text fontSize="3rem" fontWeight="700">
            I AM JEREMICAH LICUP A WEB DEVELOPER
          </Text>
          <Text>
            I'm a filipino Web Developer focusing mainly in frontend
            development. I'm 24 years old graduated from Mabalacat City College
            in year 2022. I am a degree holder in Bachelors of Science in
            Information Technology
          </Text>
          <Button colorScheme="green" marginBlock="5">
            <Link href="/works">My Works</Link>
          </Button>
        </Box>
      </Flex>
    </HStack>
  );
};

export default AboutMe;
