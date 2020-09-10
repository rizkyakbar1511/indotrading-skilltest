import React from "react";
import { Grid } from "@material-ui/core";
import Navigation from "./components/Navigation";
import MainContent from "./components/MainContent";
import SideMenu from "./components/SideMenu";

export default function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={7} md={9}>
        <Grid container direction="column">
          <Grid item md>
            <Navigation />
          </Grid>
          <Grid item md>
            <MainContent />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={5} md={3}>
        <SideMenu />
      </Grid>
    </Grid>
  );
}
