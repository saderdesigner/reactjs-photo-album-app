import { Box, CircularProgress } from "@material-ui/core";
import React from "react";

function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loading;
