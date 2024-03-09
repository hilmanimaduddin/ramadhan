import { Box, Button, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import CreatePage from "./indexthis";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isShow, setIsShow] = useState(false);
  const [isPlay, setIsPlay] = useState(true);
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlay(true);
      } else {
        audioRef.current.pause();
        setIsPlay(false);
      }
    }
  };

  const OpenShow = () => {
    setIsShow(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <Box display={"flex"} flexDir={"column"}>
      <Box display={"none"}>
        <audio
          src="/ramadhan-inst.mp3"
          controls
          style={{ width: "100%" }}
          ref={audioRef}
        />
      </Box>
      {(isShow && (
        <Box>
          <CreatePage />
          <Box
            style={{ position: "fixed", bottom: 0, right: 0, zIndex: 100 }}
            p={4}
          >
            <Button colorScheme="teal" onClick={handlePlayPause}>
              <FontAwesomeIcon icon={isPlay ? faPause : faPlay} />
            </Button>
          </Box>
        </Box>
      )) || (
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          h={"100vh"}
          gap={4}
        >
          <Text textAlign={"center"}>Selamat datang, Wahai kawan</Text>
          <Button colorScheme="teal" onClick={OpenShow}>
            Mulai
          </Button>
          <Text style={{ position: "fixed", bottom: 20, zIndex: 100 }}>
            By Extrarea
          </Text>
        </Box>
      )}
    </Box>
  );
}

export default AudioPlayer;
