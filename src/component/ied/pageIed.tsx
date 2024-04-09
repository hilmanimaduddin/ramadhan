import { Box, Text } from "@chakra-ui/react";
import FromLeft from "../motion/FromLeft";
import FallingLetter from "../motion/FallingLetter";
import FromNone from "../motion/FromNone";
import SetTime from "../first/setTime";
import SetDate2 from "./setDate2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faHouse, faUser } from "@fortawesome/free-solid-svg-icons";

export default function PageIed() {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
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
              borderRadius={"full"}
              boxSize={"180px"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Box>
                <SetDate2 />
              </Box>
            </Box>
          </FromLeft>
          <Box
            w={"50%"}
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            gap={4}
          >
            <FromNone>
              <Box
                bgColor={"#0a6c6c"}
                color={"white"}
                p={3}
                borderRadius={"2xl"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={5}
              >
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faHouse} />
              </Box>
            </FromNone>
            <FromNone>
              <Box display={"flex"} justifyContent={"center"}>
                <Box
                  bgColor={"#0a6c6c"}
                  color={"white"}
                  p={3}
                  borderRadius={"2xl"}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={5}
                >
                  <SetTime />
                </Box>
              </Box>
            </FromNone>
          </Box>
        </Box>
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
        </Box>
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Text>Ini adalah halaman IED</Text>
        </Box>
      </Box>
    </Box>
  );
}
