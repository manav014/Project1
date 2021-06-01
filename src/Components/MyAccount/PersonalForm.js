import React, { useState, useEffect } from "react";

// @material-ui components
import TextField from "@material-ui/core/TextField";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function PersonalForm(props) {
  const gender = [
    {
      abbreviation: "M",
      name: "Male",
    },
    {
      abbreviation: "F",
      name: "Female",
    },
    {
      abbreviation: "Others",
      name: "Others",
    },
  ];
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
  });
  const onChangeHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const mobileOnChangeHandler = (e) => {
    if (e.target.value.length >= 11 || isNaN(e.target.value.slice(-1))) {
      setFormData({
        ...formData,
        [e.target.name]: formData.contact,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Personal Information" />
          <Tab label="Change Password" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form style={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                onChange={onChangeHandler}
                name="firstName"
                label="First name"
                fullWidth
                autoComplete="given-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="lastName"
                name="lastName"
                label="Last name"
                onChange={onChangeHandler}
                fullWidth
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                inputProps={{
                  pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                }}
                fullWidth
                autoComplete="Email"
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                inputProps={{
                  pattern: "[1-9]{1}[0-9]{9}",
                }}
                label
                required
                id="contact"
                name="contact"
                label="Contact"
                fullWidth
                value={formData.contact}
                autoComplete="contact"
                onChange={mobileOnChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="dob"
                name="dob"
                label="DOB"
                fullWidth
                autoComplete="dob"
                onChange={onChangeHandler}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                required
                id="gender"
                name="gender"
                label="Gender"
                fullWidth
                onChange={onChangeHandler}
                value={formData.gender}
              >
                {gender.map((option, key) => (
                  <MenuItem key={key} value={option.name} name={option.name}>
                    {option.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#37b3f9",
                    color: "#FFFFFF",
                    marginBottom: "4vh",
                  }}
                >
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <form style={{ width: "100%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                type="password"
                required
                id="oldpassword"
                name="oldpassword"
                label="Old Password"
                fullWidth
                autoComplete="oldpassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="password"
                id="newpassword"
                name="newpassword"
                label="New Password"
                fullWidth
                autoComplete="newpassword"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                type="password"
                id="confirmnewpassword"
                name="confirmnewpassword"
                label="Confirm New Password"
                fullWidth
                autoComplete="confirmnewpassword"
              />
            </Grid>

            <Grid item xs={12}>
              <div className={classes.buttons}>
                <Button
                  type="submit"
                  variant="contained"
                  style={{
                    backgroundColor: "#37b3f9",
                    color: "#FFFFFF",
                    marginBottom: "4vh",
                  }}
                >
                  Submit
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </TabPanel>
    </ThemeProvider>
  );
}

export default PersonalForm;
