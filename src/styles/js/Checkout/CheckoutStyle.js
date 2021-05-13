const checkoutstyle = (theme) => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: "70vw",
      marginLeft: theme.spacing(2),
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  PaymentDetailsCheckout: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(15),
    },
  },
  stepper: {
    padding: theme.spacing(3, 2, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

export default checkoutstyle;
