import React from "react";
import { Box, Flex, Link, Button, Image } from "@chakra-ui/react";
import logo from "../assets/logo-no-background.svg";
import "../assets/style.css";
export default function Navbar(props) {
  return (
    <Flex
      gap={4}
      style={{ position: "sticky", top: "0", zIndex: "1" }}
      h={16}
      alignItems={"center"}
      justifyContent={"flex-start"}
      className={"main-navbar"}
      bg={"#17133f"}
      px={4}
    >
      <Box>
        <Link href={"/"}>
          <Image src={logo} width={"10em"} />
        </Link>
      </Box>
      <Box>
        <Link textDecoration="none" href={"/startups"}>
          <Button className={"navbar-button"}>Start-Ups</Button>
        </Link>
      </Box>
      <Box>
        <Link textDecoration="none" href={"/dashboard"}>
          <Button className={"navbar-button"}>Dashboard</Button>
        </Link>
      </Box>
      <Box>
        <Button isDisabled={"true"} className={"navbar-button"}>
          Investors
        </Button>
      </Box>
      <Box>
        <Button className={"navbar-button"} onClick={props.scrollFunc}>
          FAQ
        </Button>
      </Box>
    </Flex>
  );
}
