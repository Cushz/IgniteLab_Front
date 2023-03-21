import { React } from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Link,
  Text,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import "../assets/style.css";
import Startup from "./Startup";
import Navbar from "./Navbar";
export default function Startup_list() {
  return (
    <div className="my_sec_body">
      <Navbar />
      <Flex
        p={"5em"}
        margin={"0 auto"}
        flexDirection={"column"}
        className={"Startup_list"}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box color={"white"}>
            <Heading>Startups</Heading>
          </Box>
        </Flex>

        <Flex
          mt={"4em"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Startup />
        </Flex>
      </Flex>
    </div>
  );
}
