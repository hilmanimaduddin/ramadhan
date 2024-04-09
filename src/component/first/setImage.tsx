import { Box, Image } from "@chakra-ui/react";

export default function SetImage() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={5}
      shadow={"dark-lg"}
      borderRadius={"lg"}
    >
      <Image borderRadius={"lg"} src="/ramadhan-image.jpg" alt="coba" />
    </Box>
  );
}
