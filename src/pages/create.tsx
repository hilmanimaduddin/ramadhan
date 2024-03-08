"use client";

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
          <Text
            // border={"1px solid black"}
            bgColor={"#0a6c6c"}
            color={"white"}
            p={1}
            paddingInline={2}
            borderRadius={"md"}
            fontWeight="bold"
            fontSize="md"
          >
            Kapan Ramadhan???
          </Text>
          <SetTime />
        </Box>
        <SetDate />
        <SetImage />
        <SetCountdown />
      </Box>
    </Box>
  );
}
