import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import {
  AccountCircleOutlined,
  LockOpen,
  VpnKey,
  AccessTime,
  ListAlt,
  ArrowForward,
} from "@material-ui/icons";
import Popover from "@material-ui/core/Popover";

export default function SideMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [count, setCount] = useState(0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Grid className={classes.root} container direction="column">
      <Container>
        <Grid container item md={12} justify="flex-end">
          <Button aria-describedby={id} onClick={handleClick}>
            <AccountCircleOutlined style={{ fontSize: 30 }} />
          </Button>
          <Box className={classes.itemCounter} component="div">
            <Typography variant="body1">3</Typography>
          </Box>
        </Grid>
        <Grid
          style={{ paddingTop: 20 }}
          container
          item
          md={12}
          justify="flex-start"
          alignItems="center"
        >
          <Typography variant="h6">My Order</Typography>
          <ListAlt style={{ marginLeft: 10 }} size={20} />
        </Grid>
        <Grid
          style={{ paddingTop: 40, paddingBottom: 40 }}
          container
          item
          md={12}
          justify="center"
          alignItems="center"
        >
          <Box className={classes.card}>
            <Box className={classes.cardTitle} component="div">
              <Typography className={classes.addressText} variant="body1">
                625 St Morks Ave
              </Typography>
              <Typography className={classes._editText} variant="body1">
                Edit
              </Typography>
            </Box>
            <Box className={classes.cardContent} component="div">
              <AccessTime
                style={{
                  color: "#ff5722",
                  borderRadius: 10,
                  backgroundColor: "grey",
                  padding: 10,
                }}
              />
              <Typography style={{ color: "#ffffff" }} variant="body1">
                35 Min
              </Typography>
              <Typography
                style={{ color: "#ff5722", cursor: "pointer" }}
                variant="body1"
              >
                Choose time
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          style={{ height: 450, borderBottom: "1px solid grey" }}
          justify="space-between"
          direction="column"
          container
          item
          md={12}
        >
          <Box component="div">
            <Box
              display="flex"
              component="div"
              justifyContent="space-between"
              alignItems="center"
            >
              <img
                src={
                  "https://i.pinimg.com/originals/eb/a1/cf/eba1cfe494e4c8d5f6c5b8b5f7a2c452.jpg"
                }
                alt="order-item-logo"
                className={classes.orderImage}
              />
              <Box display="flex" justifyContent="space-between" width="185px">
                <Typography variant="body2">1 x</Typography>
                <Typography style={{ fontWeight: "bold" }} variant="body2">
                  Beach BBQBurger
                </Typography>
                <Typography style={{ color: "grey" }} variant="caption">
                  $14.99
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              component="div"
              justifyContent="space-between"
              alignItems="center"
              marginTop={5}
            >
              <img
                src={
                  "https://www.cobsbread.com/drive/uploads/2018/02/Rainbow-Vegetable-Sandwich-850x630.jpg"
                }
                alt="order-item-logo"
                className={classes.orderImage}
              />
              <Box display="flex" justifyContent="space-between" width="185px">
                <Typography variant="body2">1 x</Typography>
                <Typography style={{ fontWeight: "bold" }} variant="body2">
                  Sandwich
                </Typography>
                <Typography style={{ color: "grey" }} variant="caption">
                  $9.99
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              component="div"
              justifyContent="space-between"
              alignItems="center"
              marginTop={5}
            >
              <img
                src={
                  "https://thecozycook.com/wp-content/uploads/2020/02/Copycat-McDonalds-French-Fries--500x500.jpg"
                }
                alt="order-item-logo"
                className={classes.orderImage}
              />
              <Box display="flex" justifyContent="space-between" width="185px">
                <Typography variant="body2">1 x</Typography>
                <Typography style={{ fontWeight: "bold" }} variant="body2">
                  French fries
                </Typography>
                <Typography style={{ color: "grey" }} variant="caption">
                  $5.99
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              component="div"
              justifyContent="space-between"
              alignItems="center"
              marginTop={5}
            >
              <img
                src={
                  "https://library.kissclipart.com/20180912/kew/kissclipart-delivery-icon-png-clipart-delivery-computer-icons-b356cc26e85f554a.jpg"
                }
                alt="order-item-logo"
                className={classes.orderImage}
              />
              <Box display="flex" justifyContent="space-between" width="185px">
                <Typography style={{ fontWeight: "bold" }} variant="body2">
                  Delivery
                </Typography>
                <Typography style={{ color: "grey" }} variant="caption">
                  $0.00
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes._priceTotalBox} component="div">
            <Typography variant="body1">Total:</Typography>
            <Typography variant="h5">$ 25.97</Typography>
          </Box>
        </Grid>
        <Grid
          style={{ height: 120 }}
          justify="space-between"
          container
          item
          md={12}
        >
          <Box className={classes.checkoutWrapper} component="div">
            <Box
              display="flex"
              component="div"
              justifyContent="space-between"
              flexDirection="column"
              width="110px"
            >
              <Typography variant="body1">Persons</Typography>
              <Box className={classes._counterWrapper} component="div">
                <Button
                  disabled={count === 0}
                  onClick={() => setCount(count - 1)}
                >
                  -
                </Button>
                <Typography variant="body1">{count}</Typography>
                <Button onClick={() => setCount(count + 1)}>+</Button>
              </Box>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              width="100%"
            >
              <Button className={classes._btnCheckout}>
                Checkout <ArrowForward size={15} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <List
          component="nav"
          className={classes.popoverList}
          aria-label="mailbox folders"
        >
          <ListItem button>
            <LockOpen />
            <Typography variant="body1">Login</Typography>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <VpnKey />
            <Typography variant="body1">Register</Typography>
          </ListItem>
        </List>
      </Popover>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#dddddd",
    height: "100%",
    padding: "20px 0 10px 0px",
  },
  itemCounter: {
    backgroundColor: "orange",
    padding: "2px 15px 2px 15px",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popoverList: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "20px !important",
  },
  card: {
    backgroundColor: "#3b2e5a",
    padding: 20,
    width: 300,
    borderRadius: 10,
  },
  cardTitle: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContent: {
    display: "flex",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  addressText: {
    color: "#ffffff",
  },
  _editText: {
    color: "#ff5722",
    cursor: "pointer",
  },
  orderImage: {
    width: 80,
    height: 50,
    borderRadius: 10,
  },
  _priceTotalBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 0px 20px 0px",
  },
  _counterWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    border: "1px solid grey",
  },
  _btnCheckout: {
    backgroundColor: "#f0a500",
    height: 75,
    width: 140,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  checkoutWrapper: {
    display: "flex",
    width: "100%",
    paddingTop: 40,
  },
}));
