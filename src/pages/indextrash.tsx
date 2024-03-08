import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box, Text } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDir={"column"}
        w={"100%"}
      >
        <Text>test</Text>
        <Text>test</Text>
        <Box
          border="1px solid red"
          p={4}
          m={4}
          overflow="auto"
          h="100px"
          w="80%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text>test</Text>
        </Box>
      </Box>
    </>
  );
}
