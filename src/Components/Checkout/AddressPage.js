import React from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Collapse from "@material-ui/core/Collapse";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Portal from "@material-ui/core/Portal";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const details = [
  {
    name: "Ashutosh Aggarwal",
    address: "I-87 Shastri Nagar Jaipur , Rajasthan 201054",
  },
  {
    name: "Khushi Rauniyar",
    address: "K Block Kavi Nagar Gurugram UttarPradesh , 205410",
  },
  {
    name: "Manav Aggarwal",
    address:
      "50 D/B Slice 4  Scheme-78 Vijay Nagar Indore ,Madhya Pradesh 401235",
  },
  {
    name: "Avanya Wadhwa",
    address: "34 E/N Powder Gali Goregaon East , Mumbai , Maharashtra 301254",
  },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#37b3f9",
    },
  },
});
const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: "700",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
  shipping: {
    marginLeft: "3vw",
    fontSize: "3.5vw",
    fontWeight: "500",
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      fontSize: "1.8vw",
    },
  },
}));

function AddressPage(props) {
  const classes = useStyles();

  const handleForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const formRef = React.useRef(null);
  return (
    <React.Fragment>
      {/* <ThemeProvider theme={theme}> */}

      <Grid container>
        <Grid item xs="6">
          <Typography component="h2" variant="h5" className={classes.shipping}>
            Shipping Address
          </Typography>
        </Grid>
        <Grid item xs="6">
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleForm}
              style={{
                color: "white",
              }}
              className={classes.button}
            >
              Add New Address
            </Button>
          </div>
        </Grid>
      </Grid>
      <Hidden mdUp>
        <div className={classes.root}>
          {details.map((detail) => (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>
                  {" "}
                  {detail.name}
                </Typography>
                <AccordionDetails>
                  <Typography className={classes.secondaryHeading}>
                    {" "}
                    {detail.address}
                  </Typography>
                </AccordionDetails>
              </AccordionSummary>
              <AccordionDetails>
                <Button
                  style={{
                    backgroundColor: "#00A3FF",
                    color: "white",
                    width: "100vh",
                  }}
                  variant="contained"
                  size="large"
                  onClick={props.handleNext}
                >
                  Deliver Here
                </Button>
              </AccordionDetails>
              <AccordionDetails>
                <Button
                  className={classes.onHover}
                  size="small"
                  style={{
                    color: "#00A3FF",
                    width: "50%",
                  }}
                >
                  Edit
                </Button>

                <Button
                  className={classes.onHover}
                  size="small"
                  style={{
                    color: "#00A3FF",
                    width: "50%",
                  }}
                >
                  Delete
                </Button>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Hidden>
      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Hidden smDown>
          <Grid item xs={10} sm={4}>
            <AddressCard
              title="Avanya Wadhwa"
              apartment_address="J Block 65"
              street_address="Govind Puram , Ghaziabad"
              area_pincode="245192"
              state="Uttar Pradesh"
              handleNext={props.handleNext}
            />
          </Grid>
          <Grid item xs={10} sm={4}>
            <AddressCard
              title="Khushi Rauniyar"
              apartment_address="J Block 65"
              street_address="Shrinagar , Gurgaon"
              area_pincode="245192"
              state="Uttar Pradesh"
              handleNext={props.handleNext}
            />
          </Grid>
          <Grid item xs={10} sm={4}>
            <AddressCard
              title="Aashutosh Agrawal"
              apartment_address="J Block 65"
              street_address="Govind Puram , Ghaziabad"
              area_pincode="245192"
              state="Uttar Pradesh"
              handleNext={props.handleNext}
            />
          </Grid>
          <Grid item xs={10} sm={4}>
            <AddressCard
              title="Manav Agarwal"
              apartment_address="J Block 65"
              street_address="Govind Puram , Ghaziabad"
              area_pincode="245192"
              state="Uttar Pradesh"
              handleNext={props.handleNext}
            />
          </Grid>
        </Hidden>
        <Grid item xs={12}>
          <div ref={formRef}>
            <AddressForm />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressPage;

AddressPage.propTypes = {
  handleNext: PropTypes.func,
};
