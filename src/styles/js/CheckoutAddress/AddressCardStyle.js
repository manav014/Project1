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
const address = {
  Deliver: {
    color: "#FFFFFF",
    backgroundColor: "#37b3f9",
    borderRadius: "11px",
  },
  edit: {
    color: "#37b3f9",
    border: "2px solid #37b3f9",
    borderRadius: "11px",
  },
};
export default address;
