import { React, useState, useEffect } from "react";
import {
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  Button,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Kbd,
  Box,
} from "@chakra-ui/react";
import "../assets/style.css";
import axios from "axios";
export default function Startup() {
  const [startupItems, setStartupItems] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/startup`);
        setStartupItems(
          response.data.map((item) => ({ ...item, isOpen: false }))
        );
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(startupItems);
  return (
    <>
      {startupItems.map((item) => (
        <Flex key={item.id}>
          <Modal
            key={item.id}
            isOpen={item.isOpen}
            onClose={() => {
              setStartupItems(
                startupItems.map((startupItem) => {
                  if (startupItem.id === item.id) {
                    return { ...startupItem, isOpen: false };
                  } else {
                    return startupItem;
                  }
                })
              );
            }}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>{item.name}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box>
                  <Text>
                    <b>Description</b>
                  </Text>
                  <Text>{item.description}</Text>
                </Box>

                <Box>
                  <Text>
                    <b>Team Members</b>
                  </Text>
                  <Text>
                    {item.Members.split(",").map((tech) => (
                      <Text>
                        <Kbd key={tech} mr={"0.5em"} fontWeight={"medium"}>
                          {tech}
                        </Kbd>
                      </Text>
                    ))}
                  </Text>
                </Box>

                <Box>
                  <Text>
                    <b>Milestones</b>
                  </Text>
                  <Text>{item.milestones}</Text>
                </Box>

                <Box>
                  <Text>
                    <b>Financial Expectation</b>
                  </Text>
                  <Text>{item.financials}$</Text>
                </Box>

                <Box>
                  <Text>
                    <b>Contact Info</b>
                  </Text>
                  <Text>{item.contact}</Text>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Contact with CEO</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

          <Card
            key={item.id}
            onClick={() => {
              setStartupItems(
                startupItems.map((startupItem) => {
                  if (startupItem.id === item.id) {
                    return { ...startupItem, isOpen: true };
                  } else {
                    return startupItem;
                  }
                })
              );
            }}
            color={"white"}
            className={"startup_card"}
            maxW="sm"
            style={{
              backgroundImage: `url("https://i.pinimg.com/originals/8c/36/df/8c36dfa013ceacd50991c05ba25aba89.png")`,
            }}
          >
            <CardBody className={"startup_card_body"}>
              <Stack mt="6" spacing="3">
                <Heading size="md">{item.name}</Heading>
                <Text>{item.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      ))}
    </>
  );
}
