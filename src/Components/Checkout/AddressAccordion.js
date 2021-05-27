import React from "react";

// Material UI imports
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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

  const { detail } = props;
  return (
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
          onClick={() => {
            props.handleForm();
            props.handleEdit(detail);
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
          onClick={() => props.handleDelete(detail)}
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
  );
}

export default AddressAccordion;
