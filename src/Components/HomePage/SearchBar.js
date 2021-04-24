import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";
import SearchIcon from "@material-ui/icons/Search";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  FastfoodOutlinedIcon: {},
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        className={classes.input}
        placeholder="Search Category,Shop,Location"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Tooltip title="Search">
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Divider className={classes.divider} orientation="vertical" />
      <Tooltip title="Explore Products">
        <IconButton
          //   color="primary"
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <FastfoodOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Divider className={classes.divider} orientation="vertical" />
      <Tooltip title="Explore Shops">
        <IconButton
          // color="primary"
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <StoreOutlinedIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
