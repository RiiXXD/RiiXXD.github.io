import React from 'react';
import Form from './Form';

import {  Box, Flex, Link, Text, Button, Image, Heading ,Spacer} from "@chakra-ui/react";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
export default function Contact(){
//     Contact elements must have the following IDs:
// GitHub profile link : id="contact-github"
// LinkedIn profile link : id="contact-linkedin"
// Phone number : id="contact-phone"
// Email address : id="contact-email"
    return <Box bg="#FF004D" w="100%" h="85vh" p="1em 0.5em">
    <Flex w="100%" h="100%" align="center" justify="center" >
        <Box w="40%" h="100%" display={["none","none","block","block"]} >
         <Box w="100%" h="100%" bg="rgba(14,15,14,255)"  overflow={"hidden"}  boxShadow='md'  >
         <Image src="contact_.png" h="100%"></Image>
         </Box>
        </Box>

        <Box w={["95%","80%","55%","55%"]} h="100%" bg="rgba(14,15,14,255)">
       <Flex flexDir="column"  align="flex-end"  m="2em auto" w="80%">
       <ContactLinks/>
       <Box w="100%">
       <Heading color="#eb447f" fontSize={["1.5em","1.5em","2em","24px"]}>Get In Touch.</Heading>
       <Text color="white">I would love to hear from you</Text>
   </Box>
    <Form />
    {/* <Spacer/> */}
 </Flex>
        </Box>
    </Flex>
    </Box>
      }
{/* <Box id="contact" w="100%"  bg="rgba(14,15,14,255)" h="90vh">  
    
    {/* <Heading fontSize={["1em","1.2em","1.2em","1.4em"]}>IF YOU ARE KEEN ON MY WORK, DON'T HESITATE TO REACH OUT</Heading> */}
//    <Flex w="100%" justify="space-between" align="flex-start" h="100%" >
//     <Box w="45%">
//        <Image w="70%" h="90%" src="contact_.png"></Image>
//     </Box> 
//    <Flex flexDir="column"  align="flex-end" p="0em 6em" w="55%">
//   <ContactLinks/>
//   <Box w="100%">
//   <Heading color="#eb447f">Get In Touch.</Heading>
//   <Text color="white">I would love to hear from you</Text>
//   </Box>
//    <Form />
//    <Spacer/>
// </Flex>
// </Flex>
    

   
   
//   </Box> */}
function ContactLinks(){
    return    <Flex justify="space-around" gap={["0.5em","0.5em","1em","1em"]} align="center" p="1em 1em" color="#FF004D" w={["55%","50%","45%","45%"]}>
    <Link align="center"  id="contact-linkedin" href="https://linkedin.com/in/rishita-mukherjee-quest-podent" target="_blank">
    <IoLogoLinkedin fontSize={["15px","15px","25px","25px"]}/> 
    </Link>
    <Link align="center" id="contact-github" href="https://github.com/riixxd" target="_blank"><FaGithub fontSize={["15px","15px","25px","25px"]} /></Link>
    
    <Link href="mailto:thereforme06@gmail.com" align="center" id="contact-email"><IoIosMail fontSize={["25px","25px","30px","30px"]}/></Link>
    <Flex align="center" id="contact-phone" color="#FF004D"><FaPhoneAlt color="#FF004D" fontSize={["15px","15px","20px","20px"]} />
    <Text mx="0.5em" fontSize={["15px","15px","20px","20px"]} >9310270376</Text></Flex>

    </Flex>
      
}