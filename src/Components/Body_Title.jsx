import React from "react";
import { Box, Flex, Button, Heading, Text, Link } from "@chakra-ui/react";
import "../assets/style.css";
export default function Body_Title(props) {
  return (
    <Flex
      p={"15em"}
      justifyContent={"center"}
      alignItems={"center"}
      className={props.class}
      flexDirection={"column"}
    >
      <Box textAlign={"center"}>
        <Heading fontSize={"4em"} fontWeight={"700"}>
          {props.text}
        </Heading>
      </Box>
      <Box>
        <Text color={"#DCDCDC !important"} textAlign={"center"}>
          {props.desc}
        </Text>
      </Box>
      <Box mt={"1em"}>
        <Link href={"/register"}>
          <Button className={props.btnClass}>Enroll now</Button>
        </Link>
      </Box>
      <Box>
        <Text>{props.asWho}</Text>
      </Box>
    </Flex>
  );
}
