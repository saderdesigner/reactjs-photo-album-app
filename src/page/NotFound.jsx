import { Container, Grid } from "@material-ui/core";
import React from "react";

function NotFound(props) {
  return (
    <Container maxWidth="md" style={{ height: "100vh" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        style={{ height: "100%" }}
      >
        <Grid>Page NotFound</Grid>
      </Grid>
    </Container>
  );
}

export default NotFound;
