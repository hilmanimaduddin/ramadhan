import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gettingDate from "../json/gettingDay.json";
import gettingMonth from "../json/gettingMonth.json";

export default function SetDate() {
  const [getDay, setDay] = useState("");
  const [getTime, setTime] = useState("00:00:00");

  const dateNow = new Date();
  const day = dateNow.getDay();
  const date = dateNow.getDate();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();
  const time = dateNow.getTime();

  const hours = dateNow.getHours();
  const minutes = dateNow.getMinutes();
  const seconds = dateNow.getSeconds();

  const dateLater = new Date(2024, 2, 11);
  const day2 = dateLater.getDay();
  const date2 = dateLater.getDate();
  const month2 = dateLater.getMonth();
  const year2 = dateLater.getFullYear();

  // console.log("Puasa : ", dateLater);
  // console.log("Hari ini : ", dateNow);

  useEffect(() => {
    setDay(gettingDate[day].value);
  }, []);

  function renderTime() {
    setTime(`${hours}:${minutes}:${seconds}`);
    // console.log("time : ", getTime);
  }

  // setInterval(renderTime, 5000);

  return (
    <Box>
      <Box shadow={"dark-lg"} p={2} rounded="lg" bg="white">
        <Text pt={2} paddingInline={2}>
          {gettingDate[day].name}, {date} {gettingMonth[month].name} {year}
        </Text>
        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          textAlign={"center"}
          alignItems="center"
          p={1}
        >
          <Box
            borderBottom={day == 0 ? "2px solid black" : "none"}
            shadow={day === 0 ? "rgba(0, 0, 0, 0.5)" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Min</Text>
            <Text>
              {date - (day - gettingDate[0].id) < 1
                ? "-"
                : date - (day - gettingDate[0].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 1 ? "2px solid black" : "none"}
            shadow={day == 1 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Sen</Text>
            <Text>
              {date - (day - gettingDate[1].id) < 1
                ? "-"
                : date - (day - gettingDate[1].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 2 ? "2px solid black" : "none"}
            shadow={day == 2 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Sel</Text>
            <Text>
              {date - (day - gettingDate[2].id) < 1
                ? "-"
                : date - (day - gettingDate[2].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 3 ? "2px solid black" : "none"}
            shadow={day == 3 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Rab</Text>
            <Text>
              {date - (day - gettingDate[3].id) < 1
                ? "-"
                : date - (day - gettingDate[3].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 4 ? "3px solid black" : "none"}
            shadow={day == 4 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Kam</Text>
            <Text>
              {date - (day - gettingDate[4].id) < 1
                ? "-"
                : date - (day - gettingDate[4].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 5 ? "2px solid black" : "none"}
            shadow={day === 5 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Jum</Text>
            <Text>
              {date - (day - gettingDate[5].id) < 1
                ? "-"
                : date - (day - gettingDate[5].id)}
            </Text>
          </Box>
          <Box
            borderBottom={day == 6 ? "2px solid black" : "none"}
            shadow={day == 6 ? "inner" : "none"}
            borderRadius={"lg"}
            p={2}
          >
            <Text>Sab</Text>
            <Text>
              {date - (day - gettingDate[6].id) < 1
                ? "-"
                : date - (day - gettingDate[6].id)}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
