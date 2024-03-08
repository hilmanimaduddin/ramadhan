"use client";

import { Box, Text } from "@chakra-ui/react";

function Error({ statusCode }: any) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : "An error occurred on client"}
    </p>
  );
}

function NewError() {
  return (
    <Box>
      <Text>gk ada halamannya... </Text>
    </Box>
  );
}

export default NewError;
