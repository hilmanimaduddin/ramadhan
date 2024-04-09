import {
  Box,
  Button,
  Grid,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function Confirm() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({
    name: "",
    conf: "",
    reason: "",
  });
  function Checkin() {
    if (data.name === "") {
      alert("Isinen sek to jenengmu");
    } else if (data.conf === "") {
      alert("Pilih dulu, ikut apa enggak");
    } else if (data.reason === "" && data.conf === "gak melu") {
      alert("Opo alesanmu? Nyapo gak melu?");
    } else {
      onOpen();
    }
  }
  function Submit() {
    alert("Kamu sudah terdaftar");
  }

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      h={"100vh"}
    >
      <Box
        maxW="xl"
        width="500px"
        p={4}
        display={"flex"}
        flexDir={"column"}
        gap={4}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          p={5}
          shadow={"dark-lg"}
          borderRadius={"lg"}
        >
          <Text>Mohon isi dengan nama anda...</Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          p={5}
          shadow={"dark-lg"}
          borderRadius={"lg"}
        >
          <Text>Nama : {data.name}</Text>
          <Text>
            Kehadiran :{" "}
            {data.conf === "melu"
              ? "Ikut"
              : data.conf === "gak melu"
              ? "Tidak Ikut"
              : "Pilih salah satu"}
          </Text>
          <Text>Alesan : {data.reason}</Text>
        </Box>
        <Input
          placeholder="Jenengmu"
          size="lg"
          shadow={"dark-lg"}
          border={3}
          type="text"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={4} w={"100%"}>
            <Button
              shadow={"dark-lg"}
              onClick={() => setData({ ...data, conf: "melu" })}
              colorScheme="blue"
            >
              Melu
            </Button>
            <Button
              shadow={"dark-lg"}
              onClick={() => setData({ ...data, conf: "gak melu" })}
              colorScheme="red"
            >
              Gak Melu
            </Button>
          </Grid>
        </Box>
        <Input
          placeholder="Alesan gak melu"
          size="lg"
          shadow={"dark-lg"}
          border={3}
          type="text"
          onChange={(e) => setData({ ...data, reason: e.target.value })}
        />
        <Box display={"flex"} gap={4}>
          <Link href="/letter" style={{ width: "50%" }}>
            <Button
              shadow={"dark-lg"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              color={"white"}
              w={"100%"}
            >
              Kembali
            </Button>
          </Link>
          <Button
            bgGradient={"linear(to-l, #7928CA, #FF0080)"}
            shadow={"dark-lg"}
            color={"white"}
            w={"50%"}
            onClick={Checkin}
          >
            Kirim
          </Button>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent m={5}>
            <ModalHeader>Konfirmasi</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>
                <Text>Anda yakin? sudahkan kamu mengisi dengan benar?</Text>
                <Text>Nama : {data.name}</Text>
                <Text>
                  Kehadiran :{" "}
                  {data.conf === "melu"
                    ? "Ikut"
                    : data.conf === "gak melu"
                    ? "Tidak Ikut"
                    : "Pilih salah satu"}
                </Text>
                <Text>Alesan : {data.reason}</Text>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                color={"white"}
                mr={3}
                onClick={onClose}
              >
                Kembali
              </Button>
              <Button
                bgGradient={"linear(to-l, #7928CA, #FF0080)"}
                color={"white"}
                variant="ghost"
                onClick={Submit}
              >
                Kirim
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
}
