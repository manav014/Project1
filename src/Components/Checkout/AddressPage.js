import React, { useEffect, useState } from "react";
import AddressCard from "./AddressCard";
import AddressForm from "./AddressForm";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import Box from '@material-ui/core/Box';
import Skeleton from '@material-ui/lab/Skeleton';

import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import { connect } from "react-redux";
import { addressListURL } from "../../consts/constants";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
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
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openerror, setOpenerror] = React.useState(false);
  const skeletons=[1,2,3]
  const [openEditSuccess, setEditSuccess] = React.useState(false);
  const [openEditerror, setOpenEditerror] = React.useState(false);

  const handleForm = () => {
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenerror(false);
    setEditSuccess(false);
    setOpenEditerror(false);

  };
  const { token } = props;
  const [details, setdetails] = useState([]);
  const deleteAddress=(detail)=>{
    const newDetails = details.filter((item) => item!==detail);
    setdetails(newDetails);
    setOpenSuccess(true);
    axios.delete("")
    .then((res)=>{
     
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
    }
    const [updateDetails, setUpdateDetails] = useState(null);
    const editAddress=(detail)=>{
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
      setUpdateDetails(detail)
        // console.log(updateDetails)
      };
      const [addressLoading, setAddressloading] = React.useState(true);
  const getAddresses = () => {
    setAddressloading(true);
    axios
      .get(addressListURL, {
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
        //TODO Error
      });
  };
  useEffect(() => {
    if (token) getAddresses();
  }, [token]);
  const formRef = React.useRef(null);
  return (
    <React.Fragment>
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
          {details.map((detail, key) => (
            <Accordion key={key}>
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
                    {detail.apartment_address}
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
                  onClick={() => {
                    handleForm();
                    editAddress(detail);
                  }}
                  size="small"
                  style={{
                    color: "#00A3FF",
                    width: "50%",
                  }}
                >
                  Edit
                </Button>

                <Button
                onClick={()=>deleteAddress(detail)}
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
        { !addressLoading ?
          details.map((detail, key) => (
            <Grid item xs={10} sm={4}>         
              <AddressCard
                key={key}
                handleNext={props.handleNext}
                handleEdit={() => {
                  handleForm();
                  editAddress(detail);
                }}
                deleteAddress={deleteAddress}
                detail={detail}
              />
            </Grid>
          )): 
          <div style={{display:"flex"}}>
           {  skeletons.map((index)=>(
             
        <Box key={index} width={210} marginLeft={6} marginRight={12} my={5}>
          <Skeleton variant="rect" width={280} height={150} />
        <Box pt={0.5}>       
          <Skeleton />
          <Skeleton width="60%" />
        </Box>
        </Box>))}   
       </div>
        }
        </Hidden>
        <Grid item xs={12}>
          <div ref={formRef} key={1}>
            <AddressForm updateDetails={updateDetails} addToDetails={addToDetails}/>
          </div>
        </Grid>
      </Grid>
      <Snackbar open={openSuccess,openEditSuccess} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Address Deleted Successfully!
        </Alert>
        <Alert onClose={handleClose} severity="success">
          Address Edited Successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={openerror,openEditerror} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
         Unable to process your request!
        </Alert>
      </Snackbar>
    </React.Fragment>
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
