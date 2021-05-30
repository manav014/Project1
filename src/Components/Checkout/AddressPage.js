// React Library Imports
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";

// Material ui imports
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../consts/theme";
// component imports
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import { addressURL, addressSlugURL } from "../../consts/constants";
import AddressAccordion from "./AddressAccordion";
import styles from "../../styles/js/Checkout/AddressPageStyle";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles(styles);

function AddressPage(props) {
  const classes = useStyles();

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openerror, setOpenerror] = useState(false);

  const [openEditSuccess, setEditSuccess] = useState(false);
  const [openEditerror, setOpenEditerror] = useState(false);
  const [details, setdetails] = useState([]);
  const [turnEmpty, setTurnEmpty] = useState(false);
  const [updateDetails, setUpdateDetails] = useState(null);
  const [addressLoading, setAddressloading] = useState(true);

  const skeletons = [1, 2, 3];
  const { token } = props;
  const formRef = React.useRef(null);

  const handleForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
    if (updateDetails !== null) {
      setUpdateDetails(null);
      setTurnEmpty(true);
    }
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSuccess(false);
    setOpenerror(false);
    setEditSuccess(false);
    setOpenEditerror(false);
  };

  const handleDelete = (detail) => {
    axios
      .delete(addressSlugURL(detail.slug), {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          const newDetails = details.filter((item) => item !== detail);
          setdetails(newDetails);
          setOpenSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err.response);
        setOpenerror(true);
        //TODO Error
      });
  };

  const addToDetails = (detail) => {
    const newDetails = details.concat(detail);
    setdetails(newDetails);
  };
  const handleEdit = (detail) => {
    // axios.post("")
    // const newDetails = details.filter((item) => item!==detail);
    // setdetails(newDetails);
    // setOpenSuccess(true);

    // .then((res)=>{
    //      alert(detail)
    // setEditSuccess(true);
    //   })
    //   .catch((err) => {
    //     console.log(err.response);
    //     setEditerror(true);
    //   });
    setUpdateDetails(detail);
    // console.log(updateDetails)
  };

  const getAddresses = () => {
    setAddressloading(true);
    axios
      .get(addressURL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAddressloading(false);
        setdetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        setAddressloading(false);
        //TODO Error
      });
  };

  useEffect(() => {
    if (token) getAddresses();
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <Grid container>
        <Grid item xs={6}>
          <Typography component="h2" variant="h5" className={classes.shipping}>
            Shipping Address
          </Typography>
        </Grid>
        <Grid item xs={6}>
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
          {!addressLoading ? (
            details.map((detail, key) => (
              <AddressAccordion
                detail={detail}
                key={key}
                handleNext={props.handleNext}
                handleForm={handleForm}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <div>
              {skeletons.map((index) => (
                <Box
                  key={index}
                  width={300}
                  marginLeft={6}
                  marginRight={12}
                  my={5}
                >
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </div>
          )}
        </div>
      </Hidden>
      <Grid container spacing={3} style={{ marginTop: "2vh" }}>
        <Hidden smDown>
          {!addressLoading ? (
            details.map((detail, key) => (
              <Grid item xs={10} sm={4}>
                <AddressCard
                  key={key}
                  handleNext={props.handleNext}
                  handleEdit={() => {
                    handleForm();
                    handleEdit(detail);
                  }}
                  handleDelete={handleDelete}
                  detail={detail}
                />
              </Grid>
            ))
          ) : (
            <div style={{ display: "flex" }}>
              {skeletons.map((index) => (
                <Box
                  key={index}
                  width={210}
                  marginLeft={6}
                  marginRight={12}
                  my={5}
                >
                  <Skeleton variant="rect" width={280} height={150} />
                  <Box pt={0.5}>
                    <Skeleton />
                    <Skeleton width="60%" />
                  </Box>
                </Box>
              ))}
            </div>
          )}
        </Hidden>
        <Grid item xs={12}>
          <div ref={formRef} key={1}>
            <AddressForm
              updateDetails={updateDetails}
              addToDetails={addToDetails}
              turnEmpty={turnEmpty}
              setTurnEmpty={setTurnEmpty}
            />
          </div>
        </Grid>
      </Grid>

      <Snackbar
        open={(openSuccess, openEditSuccess)}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert onClose={handleSnackClose} severity="success">
          Address Deleted Successfully!
        </Alert>
        <Alert onClose={handleSnackClose} severity="success">
          Address Edited Successfully!
        </Alert>
      </Snackbar>
      <Snackbar
        open={(openerror, openEditerror)}
        autoHideDuration={4000}
        onClose={handleSnackClose}
      >
        <Alert onClose={handleSnackClose} severity="error">
          Unable to process your request!
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
}
AddressPage.propTypes = {
  handleNext: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};
export default connect(mapStateToProps)(AddressPage);
