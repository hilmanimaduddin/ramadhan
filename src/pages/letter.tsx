import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Letter() {
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
        <Box>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            _hover={{
              bgGradient: "linear(to-r, #FF0080, #7928CA)",
            }}
          >
            Assalamu alaikum, Sahabat Sesyurga...
          </Text>
        </Box>
        <Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            p={5}
            shadow={"dark-lg"}
            borderRadius={"lg"}
          >
            <Image borderRadius={"lg"} src="/bukber.jpeg" alt="coba" />
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          p={5}
          shadow={"dark-lg"}
          borderRadius={"lg"}
        >
          <Text textAlign={"justify"}>
            Di bulan Ramadhan ini, Kami mengundang anda untuk menghadiri acara
            buka bersama konsulat Blitar yang diselenggarakan di Rumahnya Rama,
            pada hari Ahad, 7 April 2024. mohon untuk konfirmasinya dengan
            menekan tombol dibawah ini, Terima kasih.
          </Text>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Link href="/confirm">
            <Button
              size={"lg"}
              bgGradient={"linear(to-l, #7928CA, #FF0080)"}
              color={"white"}
            >
              Kirim Konfirmasi
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
