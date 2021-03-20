import { Container, Grid } from "@material-ui/core";
import React from "react";

function Home(props) {
  return (
    <Container maxWidth="md" style={{ height: "100vh" }}>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        style={{ height: "100%" }}
      >
        <Grid>Wellcome Home</Grid>
      </Grid>
    </Container>
  );
}

export default Home;
