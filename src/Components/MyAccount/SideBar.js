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

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 300,
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
  const classes = useStyles();
  return (
    <div>
      <List className={classes.root}>
        <Paper variant="outlined" style={{ padding: "1vh", marginTop: "2vh" }}>
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
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">
                    Edit Personal Information
                  </Typography>
                }
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Change Password</Typography>
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
                  <Typography variant="subtitle1">Manage Cards</Typography>
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
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Manage Addresses</Typography>
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
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Review and Rating</Typography>
                }
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">My WishList</Typography>
                }
              />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText
                primary={<Typography variant="subtitle1">Coupons</Typography>}
              />
            </ListItem>
          </List>
        </Paper>
      </List>
    </div>
  );
}

export default SideBar;
