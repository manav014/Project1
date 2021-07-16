import React from "react";
import Grid from "@material-ui/core/Grid";
import HeaderBar from "./HeaderBar.js";
import SpContent from "./SingleProduct/SpContent";
import SpImages from "./SingleProduct/SpImages";
function SingleProduct() {
  return (
    <div>
      <HeaderBar sticky />
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={6}>
          <SpImages />
        </Grid>
        <Grid item xs={6}>
          <SpContent />
        </Grid>
      </Grid>
    </div>
  );
}

export default SingleProduct;
