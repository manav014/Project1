const CartPageStyle = (theme) => ({
  paper: {
    width: "auto",
    padding: theme.spacing(4),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(0),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      width: "58vw",
      padding: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
  PaymentDetailsCart: {
    position: "sticky",
    top: "15vh",
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(10),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(17),
      marginLeft: theme.spacing(-4),
    },
  },
  papercart: {
    padding: theme.spacing(2),
  },
  text: {
    textDecoration: "line-through",
  },
  root: {
    flexGrow: 1,
  },
  image: {
    width: 128,
    height: 128,
  },
  //   TODO improve image styling and make it responsive
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },

  cartText: {
    marginLeft: theme.spacing(1),
  },

  divider: {
    marginTop: "2vh",
    marginBottom: "2vh",
  },
  ProductCardStyle: {
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      marginLeft: theme.spacing(6),
      marginTop: theme.spacing(7),
    },
  },
});
export default CartPageStyle;
