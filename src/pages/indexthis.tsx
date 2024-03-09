"use client";

import FallingLetter from "@/component/motion/FallingLetter";
import FromLeft from "@/component/motion/FromLeft";
import FromNone from "@/component/motion/FromNone";
import SetCountdown from "@/component/setCountDown";
import SetDate from "@/component/setDate";
import SetImage from "@/component/setImage";
import SetTime from "@/component/setTime";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function CreatePage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateData = () => {
    setIsLoading(true);
  };
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        maxW="xl"
        width="500px"
        p={4}
        display={"flex"}
        flexDir={"column"}
        gap={4}
      >
        <Box display="flex" justifyContent="space-between">
          <FromLeft delay={1}>
            <Box
              bgColor={"#0a6c6c"}
              color={"white"}
              p={1}
              paddingInline={2}
              borderRadius={"md"}
            >
              <FallingLetter>
                Assalamu alaikum, Sahabat Sesyurga...
              </FallingLetter>
            </Box>
          </FromLeft>
          <FromNone>
            <SetTime />
          </FromNone>
        </Box>
        <FromLeft delay={2}>
          <SetDate />
        </FromLeft>
        <FromLeft delay={3}>
          <SetImage />
        </FromLeft>
        <FromLeft delay={4}>
          <SetCountdown />
        </FromLeft>
        <Box display={"flex"} justifyContent={"center"} p={4}>
          <Text>By Phaethoel</Text>
        </Box>
      </Box>
    </Box>
  );
}
