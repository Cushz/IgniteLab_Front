import React from "react";
import {
  Box,
  Flex,
  Image,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Link,
  Text,
} from "@chakra-ui/react";
import logo from "../assets/logo_blue.svg";
import "../assets/style.css";
export default function SignUp() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="my_body">
      <Flex
        boxShadow={"2px -1px 30px #dcdcdc"}
        gap={10}
        p={"5em"}
        width={"40%"}
        margin={"4em auto 0 auto"}
        borderRadius={"1em"}
        className={"auth_card"}
        flexDirection={"column"}
      >
        <Flex
          gap={2}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Box>
            <Image src={logo} width={"10em"} />
          </Box>
        </Flex>

        <Flex gap={8} flexDirection={"column"}>
          <Box>
            <InputGroup size="md">
              <Input type="email" placeholder="Enter email" />
            </InputGroup>
          </Box>
          <Box>
            <InputGroup gap={3} size="md">
              <Input type="text" placeholder="Name" />
              <Input type="text" placeholder="Surname" />
            </InputGroup>
          </Box>
          <Box>
            <InputGroup gap={3} size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Re-enter"
              />
            </InputGroup>
          </Box>
          <Box alignSelf={"center"}>
            <Button className={"loginButton"}>Sign Up</Button>
          </Box>
        </Flex>
        <Flex alignItems={"center"} flexDirection={"column"}>
          <Text>
            Already have an account? <Link href="login">Sign In</Link>
          </Text>
        </Flex>
      </Flex>
    </div>
  );
}
