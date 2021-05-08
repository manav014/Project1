import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

// import styles from "../../styles/js/DeliveryAddress/AddressCard.js";
import styles from "../../styles/js/DeliveryAddress/AddressCardStyle.js";

const useStyles = makeStyles(styles);
function AddressCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          title="Manav Aggarwal"
          style={{ padding: "3px !important" }}
        />
        <CardContent style={{ padding: "3px !important" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ padding: "3px !important" }}
          >
            I-45 Shastri Nagar Ghaziabad ,U.P (201023)
          </Typography>
        </CardContent>
        <Button className={classes.Deliver}>Deliver Here</Button>
        <Grid>
          <Button className={classes.edit}>Edit</Button>
          <Button className={classes.edit}>Delete</Button>
        </Grid>
      </Card>
    </div>
  );
}

export default AddressCards;
