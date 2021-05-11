const CartPageStyle = (theme) => ({
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up(1125 + theme.spacing(3) * 2)]: {
      width: "50vw",
      padding: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
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
});
export default CartPageStyle;
