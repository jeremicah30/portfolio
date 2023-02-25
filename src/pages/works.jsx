import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Box, HStack, Text, VStack, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { ee, ff, mm } from "public";

const works = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabMouseEnter = (tab) => {
    setActiveTab(tab);
  };

  const handleTabMouseLeave = () => {
    setActiveTab(null);
  };

  const typedTextRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedTextRef.current, {
      strings: ["Here are my works."],
      typeSpeed: 40,
      startDelay: 0,
      backSpeed: 40,
      backDelay: 2000,
      loop: false,
      cursorChar: "",
      contentType: "html",
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <VStack padding="30px 50px" alignItems="start" height="100vh">
      <Box width="60%" fontSize={["1.5rem", "2.5rem", "3.5rem"]}>
        <span ref={typedTextRef} fontFamily="Syne"></span>
      </Box>
      <Box width="100%" height="100%">
        <HStack justifyContent="center" height="100%">
          <Box width="30%">
            <Box
              onMouseEnter={() => handleTabMouseEnter(1)}
              fontFamily="SixCaps"
              fontSize="4rem"
              borderTop="1px"
              cursor="pointer"
            >
              Foodpals
            </Box>
            <Box
              onMouseEnter={() => handleTabMouseEnter(2)}
              fontFamily="SixCaps"
              fontSize="4rem"
              borderBlock="1px"
              cursor="pointer"
            >
              Fitness Landing Page
            </Box>
            <Box
              onMouseEnter={() => handleTabMouseEnter(3)}
              //   onMouseLeave={handleTabMouseLeave}
              fontFamily="SixCaps"
              fontSize="4rem"
              borderBottom="1px"
              cursor="pointer"
            >
              MOGO Landing Page
            </Box>
          </Box>

          <Flex
            width="70%"
            height="100%"
            textAlign="center"
            alignItems="center"
          >
            <Box>
              {activeTab === 1 && (
                <Box className="slide-in-blurred-right">
                  <Image src={ff} alt="Foodpals Image" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit laudantium doloremque quam et expedita,
                    blanditiis atque non. Nisi, fugiat perferendis. Eos ipsum
                    officiis incidunt voluptate excepturi ea libero odio harum.
                  </Text>
                </Box>
              )}
            </Box>
            <Box>
              {activeTab === 2 && (
                <Box className="slide-in-blurred-right">
                  <Image src={ee} alt="Foodpals Image" />
                  <Text>This is a simple ajdskfdnk</Text>
                </Box>
              )}
            </Box>
            <Box>
              {activeTab === 3 && (
                <Box className="slide-in-blurred-right">
                  <Image src={mm} alt="Foodpals Image" />
                  <Text>This is a simple ajdskfdnk</Text>
                </Box>
              )}
            </Box>
          </Flex>
        </HStack>
      </Box>
    </VStack>
  );
};

export default works;
