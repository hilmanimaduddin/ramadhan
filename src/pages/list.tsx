import { Box, Text } from "@chakra-ui/react";

export default function List() {
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
        <Text>Ini adalah halaman list</Text>
      </Box>
    </Box>
  );
}
