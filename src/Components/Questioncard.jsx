import { React, useState, useEffect } from "react";
import { Card, CardHeader, Heading, CardBody, Text } from "@chakra-ui/react";
import axios from "axios";
import "../assets/style.css";
export default function Questioncard() {
  const [FAQItems, setFAQItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/faq/`);
        setFAQItems(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(FAQItems);
  return (
    <>
      {FAQItems.map((item) => (
        <Card key={item.id} className={"questionCard"}>
          <CardHeader>
            <Heading size="md">{item.question}</Heading>
          </CardHeader>
          <CardBody>
            <Text>{item.answer}</Text>
          </CardBody>
        </Card>
      ))}
    </>
  );
}
