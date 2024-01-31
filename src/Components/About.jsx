import React from 'react';
import {Box,Text,Flex,Image,Link,Button, Heading, Highlight } from "@chakra-ui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { GrView } from "react-icons/gr";
export default function About(){
    return  <Box id="about" className="about section" w="100%" >
        <Heading as="h1" fontSize={["2.5em","3em","5.5em","5.5em"]} fontWeight="700" color="#eb447f" > About</Heading>
        <Flex w="100%" flexDir={["column-reverse","column-reverse","column-reverse","row"]} align={["space-between","space-between","center","center"]} justify={["center","center","space-around","space-around"]} fontSize="1.4em" > 
            <Box w={["100%","100%","90%","45%"]} p="2em 0em" align="center" fontSize={["0.7em","0.75em","1em","1em"]}>
            <Text align="left" id="user-detail-name" lineHeight={["1.5em","1.8em","1.5em","1.5em"]}>Hello there! My name is Rishita Mukherjee...</Text>
            <Text align="left"  id="user-detail-intro" lineHeight={["1.5em","1.3em","1.7em","1.7em"]}> <Highlight  query='Full-stack web developer'
    styles={{ px: '1.5', py: '1', rounded: 'full', bg: '#FF004D' }}> 
    As a curious and creative Full-stack web developer on
    a mission to build meaningful digital experiences. 
    Let's collaborate and turn your concepts into interactive 
     realities! 
    
    </Highlight>  
    </Text>
     

    </Box>
    <Box align="center">
        <Image className="home-img" src="PPIC.png"/>
        <Link href="Rishita-Resume.pdf"  id="resume-link-2" download>
      <Button id="resume-button-2"  bg="#c1d37f" onClick={()=>{window.open('https://drive.google.com/file/d/1QMWUmh2oiNWyHZLM7MWlo5UPUCG4F0GE/view?usp=sharing&export=download"')}} > Checkout Resume <FaArrowRightLong /></Button>
    </Link>
    </Box>
        </Flex>
    
  </Box>
}