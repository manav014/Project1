import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

function SpContent() {
  return (
    <div>
      <Grid item xs={5}>
        <Typography
          gutterBottom
          variant="subtitle1"
          style={{ fontWeight: "bold" }}
        >
          Khushi Multi Store
        </Typography>
        <Typography gutterBottom variant="body2" style={{ color: "grey" }}>
          Ghaziabad, UttarPradesh, 123432
        </Typography>

        <Rating name="read-only" value={3} readOnly />
      </Grid>
    </div>
  );
}

export default SpContent;
