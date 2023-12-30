import React, {useRef} from 'react';
import '@fontsource/sedgwick-ave-display';
import Navbar from "./Navbar"
import About from "./About"
import {  Box, Flex, Link, Button,Image,Heading,keyframes} from "@chakra-ui/react";
import Contact from './Contact';
import Work from './Work';
import { useScroll,useAnimation,useTransform, motion } from "framer-motion";

import Skill from './Skills';


export default function HomePage(){
  const animationKeyframes = keyframes`
  0% { transform: translateX(-30%); opacity: 0; }
  100% { transform: translateX(0%); }
`;
const rightAnimationKeyframes = keyframes`
0% { transform: translateX(40%);  }

100% { transform: translateX(0%); }
`;
const animation = `${animationKeyframes} 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`;
const rightanimation = `${rightAnimationKeyframes} 2s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s`;

const ref = useRef(null)
const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end end"]
})

const newScale = useTransform(scrollYProgress, [0, 1], [1, 5])







    return<>  
    {/* <Box w="100%" h="2em" bg="black" opacity="95%" zIndex="12" position="sticky" top="0"></Box> */}

    <Navbar/> 
    <Box ref={ref} bg="rgba(14,15,14,255)" color="#FAE7F3" p="0 2em">
                   


<Box h="100vh" my="0 2em" position="relative" >

        {/* Headings*/}
        <Box position="absolute" left={["-45%","-12%","-12%","-12%"]} as={motion.div}  animation={animation}>

        <Image h={["200PX","150px","200PX","280PX"]} src="left-hidden.png"></Image>
</Box>
<Box position="absolute" left="50%"  top="10%" as={motion.div}  animation={animation}>

<Image  src="mid-Up.png"></Image>
</Box>
        <Flex flexDir="column" h="75%" align="center" justify="center" id="home">
        <Heading   fontSize={["2em","3em","3em","5em"]} fontWeight="900" color="#eb447f">Rishita Mukherjee</Heading>

        <Heading  fontSize={["1em","1em","2em","2em"]} fontWeight="300"> I AM FULL STACK WEB DEVELOPER</Heading>
       </Flex>

<Box position="absolute" left="10%" bottom="15%"  as={motion.div}  animation={animation}>
<Image  h={["100PX","100PX","150PX","200px"]} src="leftBottom.png"></Image>
</Box>


<Box position="absolute" right="15%" bottom="40%" as={motion.div}  animation={rightanimation}>
<Image  src="rightBottom.png"></Image>
</Box>

        {/* Button*/}

      {/* <Flex  justify="flex-end"  align="center" p={[" 0em 0em"," 0em 3em"," 0em 3em"," 0em 3em"]}>
        <Link href="#contact">
      <Button as={motion.div}  scaleY={`${newScale}`} p={["1em","1em","1em","1.5em"]} fontSize={["1em","1.5em","2em","2em"]} bg="#c1d37f" align="right" borderRadius="0.5em">CONTACT ME!</Button>
      </Link>
      </Flex> */}







      </Box>

      <About/>
      <Work/>

      <Skill/>

    </Box>
    <Contact/>

    </>
      }