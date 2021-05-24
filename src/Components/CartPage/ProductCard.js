import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import product1 from "../../assets/HomePage/product1.png";
import product2 from "../../assets/HomePage/product2.png";
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
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ fontWeight: "bold" }}
                >
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography gutterBottom variant="body2">
                  Sold By: Agarwal Shop
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    &#8377;200.00
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;250.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;50.00
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
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ fontWeight: "bold" }}
                >
                  Loose HMT Kolam Rice 1 kg
                </Typography>
                <Typography gutterBottom variant="body2">
                  Sold By: Agarwal Shop
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    &#8377;200.00
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;250.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;50.00
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
              <img className={classes.img} alt="complex" src={product2} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ fontWeight: "bold" }}
                >
                  Nestle Milkmaid Sweetened Condensed Milk 400 g (Tin)
                </Typography>
                <Typography gutterBottom variant="body2">
                  Sold By: Gupta Shop
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    &#8377;150.00
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;200.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;50.00
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
              <img className={classes.img} alt="complex" src={product2} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ fontWeight: "bold" }}
                >
                  Nestle Milkmaid Sweetened Condensed Milk 400 g (Tin)
                </Typography>
                <Typography gutterBottom variant="body2">
                  Sold By: Gupta Shop
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ color: "green" }}
                >
                  In stock
                </Typography>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="body2"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    &#8377;150.00
                  </Typography>
                  <Typography
                    className={classNames(classes.cartText, classes.text)}
                    variant="body2"
                    color="textSecondary"
                  >
                    &#8377;200.00
                  </Typography>
                  <Typography
                    className={classes.cartText}
                    variant="body2"
                    gutterBottom
                    style={{ color: "green" }}
                  >
                    You save &#8377;50.00
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
          Subtotal : &#8377;700.00
        </Typography>
      </Paper>
    </div>
  );
}
