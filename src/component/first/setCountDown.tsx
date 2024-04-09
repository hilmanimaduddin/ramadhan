import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import FallingLetter from "../motion/FallingLetter";

const SetCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const fetchTimeLeft = async () => {
      try {
        const response = await axios.get("/api/countdown");
        setTimeLeft(response.data.timeLeft);
      } catch (error) {
        console.error("Error fetching countdown data:", error);
      }
    };

    fetchTimeLeft();

    // Fetch data every second
    const interval = setInterval(fetchTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert timeLeft to days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  const hours = Math.floor(
    (timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  return (
    <Box shadow={"dark-lg"} p={4} rounded="lg" bg="white">
      <Box
        pb={2}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FallingLetter delay={4}>Menuju Lebaran</FallingLetter>
        <FallingLetter delay={6}>yang penuh berkah</FallingLetter>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={2}>
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {days}
          </Text>
          <Text>Hari</Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {hours}
          </Text>
          <Text>Jam</Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {minutes}
          </Text>
          <Text>Menit</Text>
        </Box>
        <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
          <Text fontWeight={"bold"} fontSize={"2xl"}>
            {seconds}
          </Text>
          <Text>Detik</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default SetCountdown;
