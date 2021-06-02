import React from "react";
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import theme from "../../consts/theme";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import product1 from "../../assets/HomePage/product1.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function ShopOrderMobile() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={11}>
          <Paper
            variant="outlined"
            style={{ padding: "1vh", marginTop: "2vh" }}
          >
            <Grid item xs>
              <Typography
                gutterBottom
                variant="subtitle1"
                style={{ fontWeight: "bold" }}
              >
                Order No: 2223
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                style={{ fontWeight: "bold" }}
              >
                Shipped To:
              </Typography>
              <Typography gutterBottom variant="body2">
                Khushi Rauniyar
              </Typography>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  Store Name:
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Khushi Stores
                </Typography>
              </div>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{ cursor: "pointer", color: "#7D808E" }}
              >
                Remove | Save For Later | See More Like This
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={11}>
          <div className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item >
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} src={product1} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h6">
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Full resolution 1920x1080 • JPEG
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body2" style={{ cursor: "pointer" }}>
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">$19.00</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default ShopOrderMobile;
