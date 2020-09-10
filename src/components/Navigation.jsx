import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Container,
  Grid,
  Typography,
  InputBase,
} from "@material-ui/core";
import { Menu, Search } from "@material-ui/icons";

export default function Navigation() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        className={classes.root}
        container
        justify="center"
        alignItems="center"
      >
        <Grid item md={1}>
          <Button>
            <Menu />
          </Button>
        </Grid>
        <Grid item md={2}>
          <Typography variant="h6" color="#393534">
            Iss<span style={{ color: "#FF7314" }}>Resto</span>
          </Typography>
        </Grid>
        <Grid item md>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 0px 20px 0px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
