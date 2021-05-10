import React from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
// import Collapse from "@material-ui/core/Collapse";
import Portal from "@material-ui/core/Portal";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
}));

function AddressPage(props) {
  const classes = useStyles();

  const [formShow, setFormShow] = React.useState(false);
  const showForm = () => {
    setFormShow(true);
  };
  const handleForm = () => {
    showForm();
    moveToForm();
  };
  const moveToForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const formRef = React.useRef(null);
  return (
    <React.Fragment>
      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleForm}
          className={classes.button}
        >
          Add an Address
        </Button>
      </div>
      <Grid container spacing={3}>
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
        {/* <Grid item xs={10} sm={4}>
            <AddressCard
              title="Avanya Wadhwa"
              apartment_address="J Block 65"
              street_address="Govind Puram , Ghaziabad"
              area_pincode="245192"
              state="Uttar Pradesh"
            />
          </Grid>
          <Grid item xs={10} sm={4}>
            <AddressCard
              title="Avanya Wadhwa"
              apartment_address="J Block 65"
              street_address="Govind Puram , Ghaziabad"
              area_pincode="245192"
              state="Uttar Pradesh"
            />
          </Grid> */}
        <Grid item xs={12}>
          {formShow ? (
            <Portal container={formRef.current}>
              <AddressForm />
            </Portal>
          ) : null}
          <div ref={formRef} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressPage;

AddressPage.propTypes = {
  handleNext: PropTypes.func,
};
