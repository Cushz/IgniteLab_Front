import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import "../assets/style.css";
export default function Body_Exp(props) {
  return (
    <Flex
      p={"10em"}
      width={"85%"}
      margin={"0 auto"}
      justifyContent={"center"}
      alignItems={"center"}
      className={"Body_Exp"}
    >
      <Box alignSelf={"flex-start"} w={"50%"}>
        <Heading>{props.heading}</Heading>
      </Box>
      <Box w={"50%"}>
        <Text>{props.text}</Text>
      </Box>
    </Flex>
  );
}
