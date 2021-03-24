import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Fade,
  Grid,
  makeStyles,
  Typography,
  Zoom,
} from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    minHeight: 150,
    minWidth: 200,
  },
  addBtn: {
    height: 55,
    width: "100%",
    backgroundColor: "#4caf50",
    color: "white",
    "&:hover": {
      backgroundColor: "#388e3c",
    },
  },
  customTextField: {
    marginRight: "10px",
  },
  input: {
    borderRadius: "4px 0px 0px 4px",
    border: "none",
  },
});

Image.propTypes = {
  index: PropTypes.number,
  image: PropTypes.object,
  removeImage: PropTypes.func,
};

Image.defaultProps = {
  index: null,
  image: null,
  removeImage: null,
};

function Image(props) {
  const { index, image, removeImage } = props;
  const classes = useStyles();
  return (
    <Zoom in>
      <Grid item xs={4} key={index}>
        <Grid container>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image.urls.regular}
                title="Ramdom Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Food and Drink
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Grid container justify="space-between" alignItems="center">
                <Grid item></Grid>
                <Grid item>
                  <Button size="small" color="primary" variant="outlined">
                    View
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    size="small"
                    color="secondary"
                    onClick={() => {
                      removeImage(index);
                    }}
                  >
                    <DeleteForeverIcon />
                  </Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Zoom>
  );
}

export default Image;
