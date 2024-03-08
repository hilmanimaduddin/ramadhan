import { Box, Button, Text } from "@chakra-ui/react";
import { useRef } from "react";

function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <Box>
      <Box display={"none"}>
        <audio
          src="/myaudio.mp3"
          controls
          style={{ width: "100%" }}
          ref={audioRef}
        />
      </Box>
      <Button onClick={handlePlayPause}>Play/Pause</Button>
    </Box>
  );
}

function Cobaaa() {
  return (
    <Box>
      <Text>tesss</Text>
      <AudioPlayer />
    </Box>
  );
}

export default Cobaaa;
