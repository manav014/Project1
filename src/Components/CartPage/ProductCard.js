import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import product1 from "../../assets/HomePage/product1.png";
import Checkbox from "@material-ui/core/Checkbox";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import styles from "../../styles/js/CartPage/CartPageStyle.js";
import classNames from "classnames";
import Divider from "@material-ui/core/Divider";
const useStyles = makeStyles(styles);

export default function SimplePaper() {
  const [count, setCount] = React.useState(0);

  const add = () => {
    setCount(count + 1);
  };
  const subtract = () => {
    if (count <= 0) {
      setCount(0);
    } else setCount(count - 1);
  };
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body2" gutterBottom>
                    &#8377;108
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;117.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;768.0
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> </Typography>
              <Typography variant="subtitle1">
                {" "}
                <Typography variant="subtitle1"></Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <RemoveCircleIcon
                onClick={subtract}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></RemoveCircleIcon>

              <div
                style={{
                  minWidth: "15px",
                  marginLeft: "1px",
                  textAlign: "center",
                }}
              >
                {count}
              </div>

              <AddCircleIcon
                onClick={add}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></AddCircleIcon>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Divider className={classes.divider} orientation="horizontal" />
        <Grid container spacing={2}>
          <Grid item>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body2" gutterBottom>
                    &#8377;108
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;117.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;768.0
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> </Typography>
              <Typography variant="subtitle1">
                {" "}
                <Typography variant="subtitle1"></Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <RemoveCircleIcon
                onClick={subtract}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></RemoveCircleIcon>

              <div
                style={{
                  minWidth: "15px",
                  marginLeft: "1px",
                  textAlign: "center",
                }}
              >
                {count}
              </div>

              <AddCircleIcon
                onClick={add}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></AddCircleIcon>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Divider className={classes.divider} orientation="horizontal" />
        <Grid container spacing={2}>
          <Grid item>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body2" gutterBottom>
                    &#8377;108
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;117.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;768.0
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> </Typography>
              <Typography variant="subtitle1">
                {" "}
                <Typography variant="subtitle1"></Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <RemoveCircleIcon
                onClick={subtract}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></RemoveCircleIcon>

              <div
                style={{
                  minWidth: "15px",
                  marginLeft: "1px",
                  textAlign: "center",
                }}
              >
                {count}
              </div>

              <AddCircleIcon
                onClick={add}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></AddCircleIcon>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Divider className={classes.divider} orientation="horizontal" />
        <Grid container spacing={2}>
          <Grid item>
            <Checkbox
              defaultChecked
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={product1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography variant="body2" gutterBottom>
                    &#8377;108
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;117.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;768.0
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1"> </Typography>
              <Typography variant="subtitle1">
                {" "}
                <Typography variant="subtitle1"></Typography>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonGroup>
              <RemoveCircleIcon
                onClick={subtract}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></RemoveCircleIcon>

              <div
                style={{
                  minWidth: "15px",
                  marginLeft: "1px",
                  textAlign: "center",
                }}
              >
                {count}
              </div>

              <AddCircleIcon
                onClick={add}
                style={{ color: "#37b3f9", cursor: "pointer" }}
              ></AddCircleIcon>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Divider className={classes.divider} orientation="horizontal" />
        <Typography
          style={{
            display: "flex",
            justifyContent: "flex-end",
            fontWeight: "bold",
          }}
          variant="body2"
        >
          Subtotal : &#8377;248
        </Typography>
      </Paper>
    </div>
  );
}
