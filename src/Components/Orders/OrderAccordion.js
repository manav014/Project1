import React from "react";

// Libraries
import PropTypes from "prop-types";

// @material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

// local components
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "95%",
    marginLeft: "5vh",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(ItemName, Qty, MRP, Price, Amount) {
  return {
    ItemName,
    Qty,
    MRP,
    Price,
    Amount,
    history: [
      {
        ItemName: "AMUL BUTTER 100GM",
        Qty: "1",
        MRP: 48.0,
        Price: 47.0,
        Amount: 47.0,
      },
      {
        ItemName: "LAYS & KURKURA",
        Qty: "5",
        MRP: 10.0,
        Price: 10.0,
        Amount: 50.0,
      },
      {
        ItemName: "MDH DEGGI MIRCH 100GM",
        Qty: "1",
        MRP: 78.0,
        Price: 70.0,
        Amount: 70.0,
      },
      {
        ItemName: "HALDIRAM BHUJIA 400GM",
        Qty: "1",
        MRP: 99.0,
        Price: 95.0,
        Amount: 95.0,
      },
    ],
  };
}

function Row(props) {
  const { row, open, setOpen } = props;
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {
              open === row.ItemName ? setOpen("") : setOpen(row.ItemName);
            }}
          >
            {open === row.ItemName ? (
              <KeyboardArrowUpIcon />
            ) : (
              <KeyboardArrowDownIcon />
            )}
          </IconButton>
        </TableCell>
        <TableCell>{row.ItemName}</TableCell>
        <TableCell>{row.Qty}</TableCell>
        <TableCell align="right">{row.MRP}</TableCell>
        <TableCell align="right">{row.Price}</TableCell>
        <TableCell align="right">{row.Amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open === row.ItemName} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell align="right">MRP</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.ItemName}
                      </TableCell>
                      <TableCell>{historyRow.Qty}</TableCell>
                      <TableCell align="right">{historyRow.MRP}</TableCell>
                      <TableCell align="right">{historyRow.Price}</TableCell>
                      <TableCell align="right">{historyRow.Amount}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={5} />
                    <TableCell colSpan={3}>Gross Amount</TableCell>
                    <TableCell align="right">1532</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Bill Discount </TableCell>
                    <TableCell align="right">4.00</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell align="right">1526</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell colSpan={3}>YOU HAVE SAVED </TableCell>
                    <TableCell align="right">182</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    Qty: PropTypes.number.isRequired,
    Price: PropTypes.number.isRequired,
    MRP: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    ItemName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    Amount: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData("Khushi Stores", 159, 6.0, 24, 4.0, 3.99),
  createData("Manav Stores", 237, 9.0, 37, 4.3, 4.99),
  createData("Avanya Stores", 262, 16.0, 24, 6.0, 3.79),
  createData("Aashutosh Stores", 305, 3.7, 67, 4.3, 2.5),
  createData("Khushi R Stores", 356, 16.0, 49, 3.9, 1.5),
];

export default function OrderAccordion() {
  const classes = useStyles();
  const [open, setOpen] = React.useState("");
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{ marginTop: "1.5vh" }}
        >
          <Grid item xs={11}>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table">
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell>Shop Name</TableCell>
                    <TableCell />
                    <TableCell />
                    <TableCell />
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <Row
                      key={row.ItemName}
                      row={row}
                      open={open}
                      setOpen={setOpen}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
