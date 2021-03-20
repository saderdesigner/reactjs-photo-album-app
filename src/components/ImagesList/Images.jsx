import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import useDebounce from "../../utils/hooks/useDebounce";
import useFetchImage from "../../utils/hooks/useFetchImage";
import Image from "../Image/Image";
import Loading from "../Loading/Loading";

Images.propTypes = {};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    minHeight: 150,
    minWidth: 200,
  },
  customButton: {
    height: 56,
    width: "100%",
    backgroundColor: "#4caf50",
    color: "white",

    borderRadius: "0 4px 4px 0",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  customTextField: {
    marginRight: "10px",
  },
  customInput: {
    borderRadius: "4px 0px 0px 4px",
    border: "none",
  },
});

function Images(props) {
  const classes = useStyles();

  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages, errors, isLoading] = useFetchImage(
    page,
    searchTerm
  );

  const debounce = useDebounce();
  function handleInput(e) {
    const text = e.target.value;
    debounce(() => setSearchTerm(text));
    // setSearchTerm(text);
  }

  const removeImage = (index) => {
    const newImagesList = images.filter((image, idx) => idx !== index);
    setImages(newImagesList);
  };

  // if (isLoading) return <Loading />;

  return (
    <Container maxWidth="md">
      {errors.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <Typography variant="h5" align="center">
            {errors[0]}
          </Typography>
        </Box>
      )}
      <Box my={2}>
        <Grid container className={classes.root}>
          <Grid item xs={10}>
            <TextField
              type="text"
              label="Search"
              variant="outlined"
              InputProps={{ className: classes.customInput }}
              fullWidth
              onChange={handleInput}
              placeholder="Search images here"
            />
          </Grid>
          <Grid item xs={2}>
            <Button className={classes.customButton}>Search</Button>
          </Grid>
        </Grid>
      </Box>

      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={images.length}
        next={() => setPage(page + 1)}
        hasMore={true}
      >
        <Grid container spacing={2}>
          {images.map((image, index) => (
            <Image
              key={index}
              index={index}
              image={image}
              removeImage={removeImage}
            />
          ))}
        </Grid>
      </InfiniteScroll>
      {isLoading && <Loading />}
    </Container>
  );
}

export default Images;
