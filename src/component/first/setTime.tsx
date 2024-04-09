import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function SetTime() {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const dateNow = new Date();
      const hours = dateNow.getHours();
      const minutes = dateNow.getMinutes();
      const seconds = dateNow.getSeconds();
      setTime({
        hours: hours,
        minutes: minutes,
        seconds: seconds,
      });
      // console.log(
      //   "Efek dijalankan setiap detik",
      //   `${hours}:${minutes}:${seconds}`
      // );
    }, 1000); // Setiap 1000 milidetik (setiap detik)

    return () => {
      clearInterval(intervalId); // Membersihkan interval saat komponen tidak lagi dirender
    };
  }, []);

  return (
    <Box>
      <Text>{`${time.hours}:${time.minutes}:${time.seconds}`}</Text>
    </Box>
  );
}
