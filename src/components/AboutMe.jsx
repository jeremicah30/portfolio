import React from "react";
import {
  Stack,
  Text,
  Box,
  Grid,
  GridItem,
  HStack,
  Heading,
  Button,
  Flex,
  Center,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { Foodpals, Fitness, Mogo } from "public";

const AboutMe = () => {
  return (
    <Stack
      height="100vh"
      color="white"
      bg="black"
      textAlign="center"
      paddingBlock="50px"
      paddingInline="10rem"
    >
      <Box
        maxWidth="50%"
        marginInline="auto"
        paddingBlock="1rem"
        textAlign="center"
      >
        <Text fontSize="md">I am</Text>
        <Text letterSpacing="1rem" fontSize="3rem">
          Jeremicah Licup
        </Text>
        <Text fontSize="md">
          I'm a filipino Web Developer focusing mainly in frontend development.
          I'm 24 years old graduated from Mabalacat City College in year 2022. I
          am a degree holder in Bachelors of Science in Information Technology
        </Text>
      </Box>

      <Stack justifyContent="center">
        <Text>Contact me:</Text>
        <HStack justifyContent="center">
          <Link href={`mailto:licupjeremicah3245@gmail.com`} className="link">
            email
          </Link>

          <Link
            href="https://www.linkedin.com/in/jeremicah-licup-8227bb238/"
            className="link"
          >
            linkedin
          </Link>
        </HStack>
      </Stack>

      <Box paddingBlock="3rem">
        <Text textDecoration="underline">Here are my works</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem>
            <Center py={6}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                bg="white"
                boxShadow={"2xl"}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={Foodpals} alt="image"/>
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    FOODPALS
                  </Text>
                  <Text textAlign={"center"} color="gray" px={3}>
                    A recipe website made with spoonacular API
                  </Text>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color="white"
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      <Link href="https://food-4lqkwajlt-jeremicah30.vercel.app">
                        Visit
                      </Link>
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Center>
          </GridItem>
          <GridItem>
            <Center py={6}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                bg="white"
                boxShadow={"2xl"}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={Fitness} alt="image/>
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    FITNESS WEBSITE
                  </Text>
                  <Text textAlign={"center"} color="gray" px={3}>
                    Simple landing page for fitness made in Nextjs and Tailwind
                  </Text>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color="white"
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      <Link href="https://fitness-ui-teal.vercel.app/">
                        Visit
                      </Link>
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Center>
          </GridItem>
          <GridItem>
            <Center py={6}>
              <Stack
                borderWidth="1px"
                borderRadius="lg"
                w={{ sm: "100%", md: "540px" }}
                height={{ sm: "476px", md: "20rem" }}
                direction={{ base: "column", md: "row" }}
                bg="white"
                boxShadow={"2xl"}
                padding={4}
              >
                <Flex flex={1} bg="blue.200">
                  <Image objectFit="cover" boxSize="100%" src={Mogo} alt="image"/>
                </Flex>
                <Stack
                  flex={1}
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  p={1}
                  pt={2}
                >
                  <Heading fontSize={"2xl"} fontFamily={"body"}>
                    Lindsey James
                  </Heading>
                  <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
                    MOGO
                  </Text>
                  <Text textAlign={"center"} color="gray" px={3}>
                    MOGO landing page made from HTML and SCSS
                  </Text>

                  <Stack
                    width={"100%"}
                    mt={"2rem"}
                    direction={"row"}
                    padding={2}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Button
                      flex={1}
                      fontSize={"sm"}
                      rounded={"full"}
                      bg={"blue.400"}
                      color="white"
                      boxShadow={
                        "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                      }
                      _hover={{
                        bg: "blue.500",
                      }}
                      _focus={{
                        bg: "blue.500",
                      }}
                    >
                      <Link href="https://mogo-rosy.vercel.app/">Visit</Link>
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Center>
          </GridItem>
        </Grid>
      </Box>
    </Stack>
  );
};

export default AboutMe;
