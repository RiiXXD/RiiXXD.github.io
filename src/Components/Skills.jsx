import React from 'react';

import {  Box, Flex, Text, Image, Heading, Stack, keyframes} from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function Skill(){
  const animationKeyframes = keyframes`
  0% { transform:  rotate(0); }
  25% { transform:  rotate(5deg); }
  50% { transform:  rotate(0deg);  }
  75% { transform:  rotate(-5deg); }
  100% { transform:  rotate(0);}
`;
const animation = `${animationKeyframes} 2s ease-in-out infinite`;

    
    return <Box id="skills">
        {/* Skills cards */}

        {/* Example card */}
        <Heading as="h1" fontSize={["2.5em","3em","5.5em"]} color="#eb447f" fontWeight="700">Skills </Heading>
     
        <Box className="skills-card" w="100%" h="80%" >
        <Flex flexDir={["column-reverse","reverse-column","reverse-column","row"]} align="center" justify="space-around" p={["3em 0.5em","3em 0.5em","3em 0em","3em 0"]}>
        <Image src="skill.png" w="300px"></Image>
        <Flex flexDir="column" align="flex-end"  color="white" >
<Flex align="center" justify="center" gap="1.2em">
         <Stack>
         <Image className='skills-card-img'src="html.png" w={["35px","50px","60px","70px"]}  as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">HTML</Text>

         </Stack>
         <Stack align="center">
         <Image className='skills-card-img' src="js.png" w={["35px","50px","60px","70px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name'>javaScript</Text>
         </Stack>
         <Stack>
         <Image src="css-3.png" w={["35px","50px","60px","70px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">CSS</Text>
         </Stack>
         <Stack>
         <Image className='skills-card-img' src="java.png" w={["35px","50px","60px","70px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">Java</Text>
         </Stack>
         <Stack>
         <Image className='skills-card-img' src="node.png" w="90px" as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">Node js</Text>
         </Stack>
{/* <Text>Redux</Text>
<Text>Express</Text>
<Text>mongoDb</Text> */}

</Flex>
<Flex justify="center" gap="30px" align="flex-end">
  <Stack>
         <Image className='skills-card-img' src="react.png" w={["45px","60px","70px","80px"]}  as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">React</Text>
         </Stack>
         <Stack>
         <Image className='skills-card-img' src="redux.png"  w={["50px","60px","70px","80px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name'>Redux</Text>
         </Stack>
         <Stack>
         <Image className='skills-card-img'src="chakra.png"  w={["50px","55px","65px","75px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name'>Chakra</Text>
         </Stack>
         <Stack>
         <Image className='skills-card-img' src="github.png"  w={["45px","60px","70px","80px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">Git</Text>
         </Stack>
        </Flex>
<Flex justify="center" gap="30px" align="flex-end">
  <Stack align="center" >
         <Image className='skills-card-img' src="express.png"  w={["60px","60px","70px","80px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">Express js</Text>
         </Stack>
         <Stack align="center">
         <Image className='skills-card-img' src="MongoDB.png" w={["35px","30px","40px","50px"]} as={motion.img}
         animation={animation}></Image><Text align={["center", "center","center","center"]}className='skills-card-name'>MongoDB</Text>
         </Stack>
         <Stack align="center">
         <Image className='skills-card-img' src="firebase.png" w={["35px","30px","40px","50px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name'>FireBase</Text>
         </Stack>
         </Flex>
         <Flex justify="center" gap="30px" align="flex-end">
  <Stack>
         <Image className='skills-card-img' src="figma.png" w={["40px","50px","60px","70px"]} as={motion.img}
         animation={animation}></Image><Text className='skills-card-name' align="center">Figma</Text>
         </Stack>
         
        </Flex>
        </Flex>
        </Flex>
        </Box>
        {/* Other skills section content */}
      
      </Box>
    
      }