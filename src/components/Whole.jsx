import React, { useState } from "react";
import {
  Box,
  Stack,
  HStack,
  StackDivider,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import HorizontalScroll from "@/hooks/horizontalScroll";

const Whole = () => {
  return (
    <Box height="100vh" position="relative" display="flex" className="main">
      <HorizontalScroll>
        <Box
          bg="black"
          width="5%"
          textAlign="center"
          justifyContent="space-between"
          display="flex"
          flexDirection="column"
        >
          <Text color="orange.300" fontWeight="700" fontSize="3rem">
            M
          </Text>
          <Text color="white" style={{ writingMode: "vertical-lr" }}>
            All rights reserved
          </Text>
        </Box>
        <Stack
          width="30%"
          bg="white"
          alignItems="start"
          justifyContent="end"
          padding="30px"
          borderRight="1px"
          borderRightColor="gray.400"
        >
          <Box>
            <Text
              className="left-text"
              lineHeight="57px"
              color="black"
              fontFamily="Syne"
              fontSize="3rem"
              fontWeight="700"
            >
              JEREMICAH LICUP
            </Text>
            <Text
              lineHeight="26px"
              fontFamily="Syne"
              fontSize="1.2rem"
              padding="15px 0"
            >
              I am a frontend developer from Mabalacat city College, delivering
              quality work to satisfy my clients.
            </Text>
            <Button bg="black" size="lg" color="white">
              View More
            </Button>
          </Box>
        </Stack>
        <HStack width="55%" alignItems="end" className="box-con">
          <Box className="box">
            <Link href="/" className="box--link">
              HOME
            </Link>
          </Box>
          <Box className="box">
            <Link href="/aboutMe" className="box--link">
              ABOUT ME
            </Link>
          </Box>
          <Box className="box">
            <Link href="/works" className="box--link">
              WORKS
            </Link>
          </Box>
          <Box className="box">
            <Link href="/" className="box--link">
              CONTACTS
            </Link>
          </Box>
          <Box className="box">
            <Link href="/" className="box--link">
              SAMPLE
            </Link>
          </Box>
        </HStack>
      </HorizontalScroll>
    </Box>
  );
};

export default Whole;
