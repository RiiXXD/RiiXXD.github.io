

import {  Box, Flex, Link, Stack,Text, Button, Image, Heading } from "@chakra-ui/react";
import { Card, Divider, ButtonGroup,CardBody, CardFooter } from '@chakra-ui/react'
import { FaHtml5, FaCss3Alt ,FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiRedux ,SiFirebase} from "react-icons/si";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Work(){
    const controls = useAnimation();
    
    const [ref, inView] = useInView({ once: false });
    const squareVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
      };
      useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    return <Box w="100%" id="projects"  >
        <Heading as="h1"  fontSize={["2.5em","3em","5.5em","5.5em"]}fontWeight="700"> Projects</Heading>
        <Flex w="100%" flexWrap="wrap" justify="space-around" ref={ref} p="3em 0em" flexDir={["column","column","column","row"]} align={["center","center","center","center"]}>






<Card className="project-card" bg="#a61c3c"  color="wheat" as={motion.div} maxW='lg'  variants={squareVariants}  animate={controls}
      initial="hidden">
  <CardBody>
    <Image
      src="Todo.png"
      alt='Todo'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className="project-title">CheckMate</Heading>
      <Text className="project-description">
      visually appealing user interface.
Incorporated user authentication for
secure access. Implemented distinct
spaces for categorizing tasks, including
'Personal' and 'Work' sections.
      </Text>
      <Flex className="project-tech-stack" justify="space-around" my="2em" >
    <Stack border="1px solid Black" align="center" p="0.3em" w={["35%","30%","30%","20%"]} boxShadow='dark-lg'>
    <FaReact fontSize="3.5em"  />
<Text fontSize="1em">React</Text>
    </Stack>
    <Stack border="1px solid Black" align="center" p="0.3em" w={["35%","30%","30%","20%"]} boxShadow='dark-lg'>
    <SiFirebase fontSize="3.5em"/>
<Text fontSize="1em">Firebase</Text>

    </Stack>
    </Flex>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Link href="https://github.com/RiiXXD/CheckMate" className="project-github-link" isExternal>
      <Button variant='solid' bg="#c1d37f">
       Code
      </Button>
      </Link>
      <Link href="https://6513f6382d6dfc7b8a98e8cc--eloquent-maamoul-0c12bd.netlify.app/" className="project-deployed-link" isExternal>

      <Button variant='ghost' color="#c1d37f">
       Live
      </Button>
      </Link>

    </ButtonGroup>
  </CardFooter>
</Card>
<Card className="project-card" bg="#5b2aec" my="2em" color="wheat" as={motion.div} maxW='lg'  variants={squareVariants}  animate={controls}
      initial="hidden">
  <CardBody>
    <Image
      src="GemGarden1.png"
      alt='gem-garden'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className="project-title">Gem-Garden</Heading>
      <Text className="project-description">
      Explore the exquisite world 
      of Gem Garden, an online jewelry
       website where you can effortlessly
        purchase the jewelry of your choice 
        from the comfort of your home.
        Visit now.
      </Text>
      <Flex className="project-tech-stack" justify="space-around" my="2em" >
     <Stack border="1px solid Black" align="center" p="0.3em" w={["35%","30%","30%","20%"]} boxShadow='dark-lg'>
     <FaReact fontSize="3.5em" />
 <Text fontSize="1em">React</Text>
 </Stack>
 <Stack border="1px solid Black" align="center" p="0.3em" w={["35%","30%","30%","20%"]} boxShadow='dark-lg'>
<SiRedux fontSize="3.5em"/>
<Text fontSize="1em">Redux</Text>

   </Stack>
    
</Flex>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href="https://github.com/Saurav9284/Unite-6-Project-Gem-Garden" className="project-github-link" isExternal>

      <Button variant='solid' bg="#c1d37f" >
       Code
      </Button>
      </Link>
      <Link href="https://saurav01gemgarden.netlify.app" className="project-deployed-link" isExternal>

      <Button variant='ghost' color="#c1d37f">
       Live
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card  bg="#b0228c" my="2em" color="wheat" as={motion.div} maxW='lg'  variants={squareVariants}  animate={controls}
   className="project-card"   initial="hidden">
  <CardBody>
    <Image
      src="Myntra1.png"
      alt='Myntra'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className="project-title">Myntra</Heading>
      <Text className="project-description">
      Myntra is a stylish 
      and user-centric e-commerce
     platform that brings the latest
        fashion trends to your fingertips.


      </Text>
      <Flex justify="space-around" my="2em" >
     <Stack border="1px solid Black" align="center" p="0.3em" w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>
     <FaHtml5 fontSize="3.5em" />
 <Text fontSize="1em">HTML</Text>
     </Stack>
     <Stack border="1px solid Black" align="center" p="0.3em" w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>
     <FaCss3Alt fontSize="3.5em"/>
<Text fontSize="1em">Css</Text>

   </Stack>
     <Stack border="1px solid Black" align="center" p="0.3em"w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>

 <IoLogoJavascript fontSize="3.5em"/>
 <Text fontSize="1em">jS</Text>

 </Stack>
</Flex>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href="https://github.com/MridulKatara/potent-toothbrush-7925" className="project-github-link" isExternal>

      <Button variant='solid' bg='#c1d37f'  >
       Code
      </Button>
      </Link>
      <Link href="https://650b2f84de1078243d876e0c--effervescent-tulumba-71b6b7.netlify.app/" className="project-deployed-link" isExternal>

      <Button variant='ghost' color='#c1d37f'>
       Live
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
<Card className="project-card" bg="#2B2A4C" my="2em" color="wheat" as={motion.div} maxW='lg'  variants={squareVariants}  animate={controls}
      initial="hidden">
  <CardBody>
    <Image
      src="green-para.png"
      alt='green'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' className="project-title">Green Paradise</Heading>
      <Text className="project-description">
      Online e-commerce platform for plants, 
      to provide a seamless shopping experience 
      for plant enthusiasts.
    </Text>
      <Flex className="project-tech-stack"
 justify="space-around" my="2em" >
     <Stack border="1px solid Black" align="center" p="0.3em" w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>
     <FaHtml5 fontSize="3.5em" />
 <Text fontSize="1em">HTML</Text>
     </Stack>
     <Stack border="1px solid Black" align="center" p="0.3em" w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>
     <FaCss3Alt fontSize="3.5em"/>
<Text fontSize="1em">Css</Text>

   </Stack>
     <Stack border="1px solid Black" align="center" p="0.3em"w={["30%","30%","30%","20%"]} boxShadow='dark-lg'>

 <IoLogoJavascript fontSize="3.5em"/>
 <Text fontSize="1em">jS</Text>

 </Stack>
</Flex>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
    <Link href="https://github.com/Coders6754/Green-Paradise" className="project-github-link" isExternal> 

      <Button variant='solid' bg='#c1d37f' >
       Code
      </Button>
      </Link>
      <Link href="https://enchanting-klepon-de18e6.netlify.app/" isExternal>

      <Button variant='ghost' color='#c1d37f'>
       Live
      </Button>
      </Link>
    </ButtonGroup>
  </CardFooter>
</Card>
</Flex >








<Box py="3em">
<Flex flexDir={["column","column","column","row"]} align={["space-between","space-between","center","center"]} justify="space-around">
        <Box p="1em" border="1px solid white"  my="2em" >
        <img  src="https://github-readme-stats.vercel.app/api?username=riixxD&theme=dark&hide_border=true&include_all_commits=false&count_private=true" alt="riixxD" />

        </Box>
        <Box p="1em" border="1px solid white " my="2em" >
        <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=riixxD&theme=dark&hide_border=true" alt="riixxD"  />

        </Box >
        </Flex>
        <Box p={["0.2em","0.5em","1em","2em"]} border="1px solid white" m="0 auto">
        <img src='https://ghchart.rshah.org/021F34/riixxD' alt='fdsdf' style={{ width: '100%', display: 'block', margin: 'auto' }}/>

        </Box>
        </Box>
    </Box>
}