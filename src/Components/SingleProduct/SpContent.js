import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import TimerIcon from "@material-ui/icons/Timer";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShareIcon from "@material-ui/icons/Share";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  text: {
    textDecoration: "line-through",
    fontSize: "1.3rem",
  },

  cartText: {
    fontSize: "1rem",
  },
  divider: {
    marginTop: "1.5vh",
    marginBottom: "1.5vh",
    width: "60%",
  },
  paper: {
    padding: "10px",
    marginTop: "1vh",
    width: "30%",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    color: "#00A3FF",
  },
}));

function SpContent() {
  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            style={{ fontWeight: "bold", color: "#343434" }}
          >
            Khushi Multi Store
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          style={{
            // display: "flex",
            // justifyContent: "flex-end",
            color: "#00A3FF",
            fontSize: "1.3rem",
            fontWeightL: "600",
          }}
        >
          <div className={classes.buttons}>
            <IconButton>
              <ShareIcon
                style={{
                  color: "#00A3FF",
                }}
              />
              Share
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" style={{ color: "grey" }}>
        Ghaziabad, UttarPradesh, 123432
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        style={{ color: "#03A685", fontSize: "1rem" }}
      >
        In stock
      </Typography>
      <Rating name="read-only" value={3} readOnly />
      <div style={{ display: "flex" }}>
        <Typography
          variant="body2"
          gutterBottom
          className={classes.cartText}
          style={{ fontWeight: "bold", color: "#535766", fontSize: "1.5rem" }}
        >
          &#8377;20
        </Typography>
        &nbsp;
        <Typography
          className={classes.text}
          // className={classes.cartText}
          variant="body2"
          color="textSecondary"
        >
          &#8377;100
        </Typography>
        &nbsp;
        <Typography
          className={classes.cartText}
          variant="body2"
          gutterBottom
          style={{ color: "#03A685" }}
        >
          You save &#8377;50.00
        </Typography>
      </div>
      <Divider className={classes.divider} orientation="horizontal" />
      <ButtonGroup>
        <RemoveCircleIcon
          style={{
            color: "#37b3f9",
            cursor: "pointer",
            fontSize: 38,
          }}
          fontSize="large"
        ></RemoveCircleIcon>
        <div
          style={{
            minWidth: "15px",
            margin: "0 8px",
            textAlign: "center",
            fontSize: "1.5rem",
          }}
        >
          1
        </div>
        <AddCircleIcon
          fontSize="large"
          // onClick={() => add(e.slug, element, k)}
          style={{
            color: "#37b3f9",
            cursor: "pointer",
            fontSize: 38,
          }}
        ></AddCircleIcon>
      </ButtonGroup>
      <Typography
        variant="h6"
        style={{
          fontWeight: "bold",
          color: "#343434",
          margin: "10px 0 10px 10px",
        }}
      >
        Delivery
      </Typography>
      {/* <Paper elevation={3} className={classes.paper}> */}
      <Input
        style={{ margin: "0px 10px" }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <LocationOnIcon color="disabled" />
          </InputAdornment>
        }
      />
      {/* </Paper> */}
      <Typography
        variant="subtitle1"
        style={{ color: "grey", fontSize: "0.95rem", margin: "0 10px" }}
      >
        Check for estimated delivery date
      </Typography>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item>
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              color: "#343434",
              margin: "10px 0 10px 10px",
            }}
          >
            Quantity
          </Typography>
        </Grid>
        <Grid item style={{ margin: "8px 20px" }}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
          >
            1 Kg
          </Button>
          {/* <Box component="span" p={2} m={2} border={1} borderColor="grey.500">
            1 Kg
          </Box> */}
        </Grid>
        <Grid item style={{ margin: "8px 10px" }}>
          {/* <Box component="span" m={1} p={2} border={1} borderColor="grey.500">
            2 Kg
          </Box> */}
          <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.margin}
          >
            1 Kg
          </Button>
        </Grid>
      </Grid>
      <Grid container style={{ margin: " 10px" }}>
        <Grid item>
          <TimerIcon color="disabled" />
        </Grid>

        <Grid item style={{ marginLeft: "0.8vw" }}>
          <Typography variant="subtitle1" style={{ color: "grey" }}>
            Best Before 14 Jul 2021 Manufactured date 16 Apr 2021
          </Typography>
        </Grid>
      </Grid>
      <Typography
        variant="h6"
        style={{
          fontWeight: "bold",
          color: "#343434",
          margin: "2.5vh 0 10px 10px",
        }}
      >
        Offers
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <BookmarkIcon
              style={{
                color: "#00A3FF",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Simpl - Pay using Simpl & Get Upto Rs. 100 Cashback* on Min. Txn of
          Rs. 500/- T&C Apply."
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BookmarkIcon
              style={{
                color: "#00A3FF",
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Simpl - Pay using Simpl & Get Upto Rs. 100 Cashback* on Min. Txn of
          Rs. 500/- T&C Apply."
          />
        </ListItem>
      </List>
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//   };
// };
// export default connect(mapStateToProps)(SpContent);
export default SpContent;
