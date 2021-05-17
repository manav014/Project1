const PaymentDetailsStyle = (theme) => ({
  paperPayment: {
    width: "auto",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      width: "19vw",
      padding: theme.spacing(3),
    },
  },
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
});

export default PaymentDetailsStyle;
