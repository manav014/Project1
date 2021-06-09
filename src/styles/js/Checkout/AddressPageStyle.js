const addressPageStyle = (theme) => ({
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
  stepper: {
    padding: theme.spacing(3, 2, 5),
  },
});

export default addressPageStyle;
