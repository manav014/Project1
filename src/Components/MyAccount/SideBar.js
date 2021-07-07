import React from "react";

// @material-ui components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import PaymentIcon from "@material-ui/icons/Payment";
import HomeIcon from "@material-ui/icons/Home";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// local components
import theme from "../../consts/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));
function SideBar() {
  let history = useHistory();

  const classes = useStyles();
  const handleRedirect = (url) => {
    history.push(url);
  };
  return (
    <ThemeProvider theme={theme}>
      <div>
        <List className={classes.root}>
          <Paper
            variant="outlined"
            style={{ padding: "1vh", marginTop: "2vh" }}
          >
            <ListItem>
              <ListItemIcon>
                <Avatar className={classes.avatar}>
                  <AccountBoxIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="button">My Account</Typography>}
              />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleRedirect("/myaccount")}
              >
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Edit Personal Information
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Change Password
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Avatar className={classes.avatar}>
                  <PaymentIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="button"> Payment</Typography>}
              />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Manage Cards
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Avatar className={classes.avatar}>
                  <HomeIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="button">Address</Typography>}
              />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleRedirect("/myaccount/address")}
              >
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Manage Addresses
                    </Typography>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <ListItem>
              <ListItemIcon>
                <Avatar className={classes.avatar}>
                  <FileCopyIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={<Typography variant="button"> My Stuff</Typography>}
              />
            </ListItem>
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleRedirect("/myaccount/review")}
              >
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Review and Rating
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleRedirect("/myaccount/wishlist")}
              >
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      My WishList
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                onClick={() => handleRedirect("/myaccount/coupons")}
              >
                <ListItemText
                  primary={
                    <Typography variant="button" color="primary">
                      Coupons
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </List>
      </div>
    </ThemeProvider>
  );
}

export default SideBar;
