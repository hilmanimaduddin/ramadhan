import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

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
    <Box>
      <Text as={"h1"}>Countdown to March 11, 2024</Text>
      <Text>
        Tinggal: {days} hari {hours} jam {minutes} menit {seconds} detik
      </Text>
    </Box>
  );
};

export default SetCountdown;
