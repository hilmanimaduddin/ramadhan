import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import gettingDate from "../../json/gettingDay.json";
import gettingMonth from "../../json/gettingMonth.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

export default function SetDate2() {
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
      <Box
        p={2}
        display={"flex"}
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <FontAwesomeIcon size="3x" icon={faCloudSun} />
        <Text pt={2} paddingInline={2}>
          {gettingDate[day].name},{" "}
        </Text>
        <Text>
          {date} {gettingMonth[month].name} {year}
        </Text>
      </Box>
    </Box>
  );
}
