const containerFluid = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
  width: "100%",
};
const container = {
  ...containerFluid,
  "@media (min-width: 576px)": {
    maxWidth: "540px",
  },
  "@media (min-width: 768px)": {
    maxWidth: "720px",
  },
  "@media (min-width: 992px)": {
    maxWidth: "960px",
  },
  "@media (min-width: 1200px)": {
    maxWidth: "1140px",
  },
};
const typographyStyle = {
  searchbarPlacement: {
    position: "absolute !important",
    top: "5% !important",
    left: "50% !important",
    transform: "translate(-50%, -50%) !important",
    zIndex: "1",
  },
  section: {
    padding: "70px 0",
  },
  iconStyle: {
    marginLeft: "25px",
    color: "#37b3f9 !important",
  },
  container,
  space50: {
    height: "50px",
    display: "block",
  },
  title: {
    color: "#121111",
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "20px",
    paddingLeft: "15px",
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%",
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    color: "#777777",
    display: "block",
    fontWeight: "500",
    fontSize: "13px",
    lineHeight: "0px",
    paddingLeft: "15px",
  },
  marginLeft: {
    marginLeft: "auto !important",
  },
  h1: {
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    fontWeight: "300",
    lineHeight: " 1.5em",
  },
  img_responsive: {
    height: "100vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "relative",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "flex",
    alignItems: "center",
  },
  cardPos: {
    display: "flex",
    marginTop: "-10px",
    height: "20px",
  },
};

export default typographyStyle;
