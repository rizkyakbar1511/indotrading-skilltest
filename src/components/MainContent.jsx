import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Box,
  Button,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import {
  AccessTime,
  ArrowForward,
  ExpandMore,
  StarBorderOutlined,
} from "@material-ui/icons";
import { items, products } from "../assets/fakeData/data";
import Slider from "react-slick";
import "../assets/customCarousel.css";
import useWindowDimensions from "../assets/utils/WindowHooks";

export default function MainContent() {
  const [active, setActive] = useState(null);
  const { height, width } = useWindowDimensions();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: width < 960 ? 3 : 5,
    slidesToScroll: 1,
  };
  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column">
        <Grid style={{ marginTop: 20 }} item md={12}>
          <Box className={classes.hero} component="div">
            <Box className={classes.heroItem} component="div">
              <img
                src={require("../assets/img/hero-logo.png")}
                alt="hero-logo"
                width={200}
              />
            </Box>
            <Box
              className={[classes.heroItem, classes.midHeroItem]}
              component="div"
            >
              <Box className={classes._midTypoWrapper} component="div">
                <Typography
                  style={{ marginRight: 6 }}
                  variant="h6"
                  gutterBottom={true}
                >
                  $0 delivery for 30 days!
                </Typography>
                <AccessTime style={{ fontSize: 24 }} />
              </Box>
              <Typography style={{ color: "grey" }} variant="caption">
                $0 delivery fee for orders over $10 for 30 days
              </Typography>
            </Box>
            <Box
              className={[classes.heroItem, classes.endHeroItem]}
              component="div"
            >
              <Box className={classes.linkWrapper}>
                <Typography variant="body1">Learn More</Typography>
                <ArrowForward style={{ fontSize: 15 }} />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          container
          item
          md={12}
          alignItems="center"
          justify="space-between"
          style={{ padding: 20 }}
        >
          <Grid container item md={5} alignItems="center" justify="flex-start">
            <Typography
              style={{ fontWeight: "bold", marginRight: 10 }}
              variant="h4"
            >
              Restaurants
            </Typography>
            <Typography variant="h4">
              <span aria-label="burger-emoji" role="img">
                🍔
              </span>
            </Typography>
          </Grid>
          <Grid
            container
            item
            sm={5}
            md={7}
            justify="flex-end"
            alignItems="center"
          >
            <Button className={classes._btnDelivery}>
              <AccessTime
                style={{ color: "#ffffff", marginRight: 10 }}
                size={10}
              />
              <Typography>
                Delivery :<span style={{ fontWeight: "bold" }}> Now</span>
              </Typography>
              <ExpandMore style={{ color: "#ffffff" }} size={10} />
            </Button>
          </Grid>
        </Grid>
        <Grid style={{ marginTop: 20 }} item sm={5} md={12}>
          <Slider {...settings}>
            {items.map((item) => (
              <Card
                className={
                  active === item.name ? classes.cardActive : classes.card
                }
              >
                <CardActionArea
                  onClick={() => setActive(item.name)}
                  style={{ width: "100%", height: "100%" }}
                >
                  <CardContent>
                    {item.icon}
                    <Typography style={{ marginTop: 20 }} variant="body1">
                      {item.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Slider>
        </Grid>
        <Grid
          style={{ marginTop: 20 }}
          justify="center"
          container
          item
          sm={12}
          md={12}
        >
          {products.map(({ title, imageUri, from, rating }) => (
            <Card
              className={
                active === title
                  ? classes._cardProductActive
                  : classes._cardProduct
              }
            >
              <CardActionArea onClick={() => setActive(title)}>
                <CardMedia
                  className={classes._cardProductImage}
                  image={imageUri}
                  title={title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h2">
                    {title}
                  </Typography>
                  <Box
                    display="flex"
                    component="div"
                    alignItems="center"
                    justifyContent="space-between"
                    style={{ minWidth: 180, maxWidth: 200 }}
                  >
                    <StarBorderOutlined size={15} />
                    <Typography variant="body1">{rating}</Typography>
                    <Typography
                      className={classes._cardProductText}
                      variant="caption"
                    >
                      {from}
                    </Typography>
                    <Typography
                      className={classes._cardProductText}
                      variant="caption"
                    >
                      {title}
                    </Typography>
                    <Typography
                      className={classes._cardProductText}
                      variant="caption"
                    >
                      $$
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  hero: {
    display: "flex",
    justifyContent: "center",
    background: "#fbc687",
    height: 200,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 420,
      height: 350,
      flexDirection: "column",
    },
  },
  heroItem: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  midHeroItem: {
    flexDirection: "column",
    flex: 2,
  },
  endHeroItem: {
    alignItems: "flex-end",
  },
  linkWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    color: "#ff5722",
    cursor: "pointer",
  },
  _midTypoWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ff5722",
  },
  card: {
    width: 100,
    maxWidth: 100,
    height: 150,
    maxHeight: 150,
    borderRadius: 30,
    textAlign: "center",
    boxShadow: "0px 0px 5px 2px rgba(0,0,0,0.75)",
  },
  cardActive: {
    width: 100,
    maxWidth: 100,
    height: 150,
    maxHeight: 150,
    borderRadius: 30,
    textAlign: "center",
    boxShadow: "0px 0px 5px 2px #FF7314",
  },
  _btnDelivery: {
    padding: "10px 20px 10px 20px",
    backgroundColor: "#ff5722",
    borderRadius: 10,
    color: "#ffffff",
    "&:hover": {
      background: "#f37121",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 10,
      padding: 10,
    },
  },
  _cardProduct: {
    maxWidth: 270,
    minWidth: 270,
    borderRadius: 10,
    margin: "20px 10px 20px 10px",
  },
  _cardProductImage: {
    height: 140,
    borderRadius: 10,
  },
  _cardProductText: {
    color: "grey",
  },
  _cardProductActive: {
    maxWidth: 270,
    minWidth: 270,
    borderRadius: 10,
    margin: "20px 10px 20px 10px",
    boxShadow: "0px 0px 5px 2px #FF7314",
  },
}));
