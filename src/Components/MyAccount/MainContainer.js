import React from "react";

// @material-ui components
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { ThemeProvider } from "@material-ui/core/styles";

// local components
import MyAccountRoutes from "../../routes/MyAccountRoutes";

// import PersonalForm from "./PersonalForm";
import theme from "../../consts/theme";

function MainContainer(props) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Paper variant="outlined" style={{ padding: "1vh", marginTop: "2vh" }}>
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={12}>
              {/* <PersonalForm /> */}
              {/* <AddressPage /> */}
              <MyAccountRoutes
                userDetails={props.userDetails}
                setUserDetails={props.setUserDetails}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </ThemeProvider>
  );
}

export default MainContainer;
