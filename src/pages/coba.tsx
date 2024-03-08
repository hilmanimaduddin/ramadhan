import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      h="100vh"
    >
      <Box
        marginBlock={"auto"}
        maxW="md"
        display={"flex"}
        flexDirection={"column"}
        p={4}
        alignItems={"center"}
        textAlign={"center"}
        gap={4}
      >
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Ayo, Buat Ucapan Untuk Orang Yang Penting Buat Kita...
        </Text>
        <Link href="#">
          <Text
            fontWeight={"bold"}
            fontSize={"2xl"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            _hover={{
              bgGradient: "linear(to-r, #FF0080, #7928CA)",
            }}
          >
            Click for Create
          </Text>
        </Link>
      </Box>
      <Text mb={9} fontSize={"sm"} fontWeight={"bold"}>
        by Phaethoele
      </Text>
    </Box>
  );
}
