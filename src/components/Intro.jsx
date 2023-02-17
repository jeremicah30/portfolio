import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Box, HStack, Text } from "@chakra-ui/react";

const Intro = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: [
        "Nice to meet you!",
        "Wanna Know More about me?",
        "Just scroll down!",
      ],
      typeSpeed: 40,
      startDelay: 0,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <HStack
      spacing="24px"
      justify="center"
      alignItems="center"
      height="100vh"
      padding={[null, "1rem", "10rem"]}
    >
      <Box
        width="40%"
        textAlign="center"
        fontSize={["4rem", "4rem", "8rem", "12rem"]}
        color="black"
      >
        <Text borderRight="4px solid black">Hey</Text>
      </Box>
      <Box width="60%" fontSize={["1.5rem", "2.5rem", "3.5rem"]}>
        <span ref={typedTextRef}></span>
      </Box>
    </HStack>
  );
};

export default Intro;
