import React from "react";

// @material-ui components
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
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
}));

function AddressAccordion(props) {
  const classes = useStyles();
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const { detail } = props;
  const handleClickOpen = () => {
    setOpenDeleteConfirm(true);
  };

  const handleDeleteClose = (from) => {
    if (from === "no") {
      setOpenDeleteConfirm(false);
    } else if (from === "yes") {
      setOpenDeleteConfirm(false);
      props.handleDelete(props.detail);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}> {detail.name}</Typography>
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
            onClick={props.openEditForm}
            size="small"
            style={{
              color: "#00A3FF",
              width: "50%",
            }}
          >
            Edit
          </Button>
          <Button
            onClick={handleClickOpen}
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
      <Dialog open={openDeleteConfirm} onClose={handleDeleteClose}>
        <DialogTitle>
          {"Do you want to delete the address permanently?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            The address would be deleted permanently.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={() => handleDeleteClose("no")}
            color="primary"
          >
            No
          </Button>
          <Button
            onClick={() => handleDeleteClose("yes")}
            color="primary"
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default AddressAccordion;
