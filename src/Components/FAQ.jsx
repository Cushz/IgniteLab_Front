import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import "../assets/style.css";
import Questioncard from "./Questioncard";
export default function FAQ() {
  return (
    <Flex id={"faq"} p={"5em"} gap={5} className="FAQ" flexDirection={"column"}>
      <Box>
        <Heading color={"white"}>Frequently Asked Questions</Heading>
      </Box>
      <Flex flexDirection={"column"} gap={5}>
        <Questioncard />
      </Flex>
    </Flex>
  );
}
