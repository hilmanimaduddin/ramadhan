import { Box, Image, Text } from "@chakra-ui/react";

export default function SetImage() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={4}
      shadow={"dark-lg"}
      borderRadius={"lg"}
    >
      <Image borderRadius={"lg"} src="/ramadhan-image.jpg" alt="coba" />
      <Text>Tesss</Text>
    </Box>
  );
}
