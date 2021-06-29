import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

// import "./map.css";
import marker from "../../assets/HomePage/marker.png";

import { allShopsURL } from "../../consts/constants";
import mapboxgl from "mapbox-gl";
import { withStyles } from "@material-ui/core/styles";

var stores = {
  type: "FeatureCollection",
  features: [],
};
const getShops = () => {
  axios
    .get(allShopsURL, {})
    .then((res) => {
      // stores = res.data;
      res.data.map((shop, key) => {
        stores.features.push({
          geometry: {
            type: "Point",
            coordinates: [shop.longitude, shop.latitude],
          },
          properties: { ...shop },
        });
        return null;
      });
    })
    .catch((err) => {
      console.log(err.response);
    });
};

const mapStyles = {
  map: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
  },

  marker: {
    backgroundImage: "url(" + marker + ")",
    backgroundSize: "cover",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    cursor: "pointer",
  },
};

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzdGluZzEyMzQyNTEyNTQxIiwiYSI6ImNraGFud2ZyYjE1eWUycG5xMTA3b2lrZTcifQ.utAlAYrt6I8LmG1Uyhn4ug";
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      lat: 28.73061,
      lng: 77.77142,
      zoom: 14,
      userLocation: {},
    };
    stores.features.forEach(function (store, i) {
      store.properties.id = i;
    });
  }

  componentDidMount() {
    getShops();
    function successLocation(position) {
      setupMap([position.coords.longitude, position.coords.latitude]);
    }
    const self = this;
    function errorLocation() {
      setupMap([self.state.lng, self.state.lat]);
    }
    navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
      enableHighAccuracy: true,
    });
    const setupMap = (center) => {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: "mapbox://styles/mapbox/streets-v11",
        center: center,
        zoom: self.state.zoom,
      });
      // TODO add heart marker for favourite shops
      new mapboxgl.Marker({
        color: "#37b3f9",
        draggable: true,
      })
        .setLngLat(center)
        .addTo(map);
      //     // HELP: to get the longitude and latitude of a marker
      //     // var lngLat = marker.getLngLat();
      //     map.on("move", () => {
      //       setLng(map.getCenter().lng.toFixed(4));
      //       setLat(map.getCenter().lat.toFixed(4));
      //       setZoom(map.getZoom().toFixed(2));
      //     });
      map.on("move", () => {
        this.setState({
          lng: map.getCenter().lng.toFixed(4),
          lat: map.getCenter().lat.toFixed(4),
          zoom: map.getZoom().toFixed(2),
        });
      });
      new mapboxgl.NavigationControl();
      // map.addControl(nav, "top-right");
      // map.addControl(
      //   new mapboxgl.GeolocateControl({
      //     positionOptions: {
      //       enableHighAccuracy: true,
      //     },
      //     trackUserLocation: true,
      //   })
      // );
      map.on("load", (e) => {
        /* Add the data to your map as a layer */
        map.addLayer({
          id: "locations",
          type: "symbol",
          /* Add a GeoJSON source containing place coordinates and information. */
          source: {
            type: "geojson",
            data: stores,
          },
          layout: {
            "icon-image": "restaurant-15",
            "icon-allow-overlap": true,
          },
        });
        // buildLocationList(stores);
      });
      map.on("click", function (e) {
        /* Determine if a feature in the "locations" layer exists at that point. */
        var features = map.queryRenderedFeatures(e.point, {
          layers: ["locations"],
        });

        /* If yes, then: */
        if (features.length) {
          var clickedPoint = features[0];

          /* Fly to the point */
          flyToStore(clickedPoint);
          /* Close all other popups and display popup for clicked store */
          createPopUp(clickedPoint);
          self.setState({ isVisible: true });

          /* Highlight listing in sidebar (and remove highlight for all other listings) */
          // var activeItem = document.getElementsByClassName("active");
          // if (activeItem[0]) {
          //   activeItem[0].classList.remove("active");
          // }
          // var listing = document.getElementById(
          //   "listing-" + clickedPoint.properties.id
          // );
          // listing.classList.add("active");
        }
      });
      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15,
        });
      }

      function createPopUp(currentFeature) {
        var popUps = document.getElementsByClassName("mapboxgl-popup");
        /** Check if there is already a popup on the map and if so, remove it */
        if (popUps[0]) popUps[0].remove();

        new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            "<h3>" +
              currentFeature.properties.name +
              "</h3>" +
              "<h4>" +
              currentFeature.properties.description +
              "</h4>"
          )
          .addTo(map);

        self.props.toggleDrawer("left", true, currentFeature)();
      }
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* This is used to get the coordinates of current point */}
        {/* <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div> */}
        {/* <Snackbar
          open={true}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          autoHideDuration={6000}
        >
          <Alert severity="success">
            Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom:{" "}
            {this.state.zoom}
          </Alert>
        </Snackbar> */}
        <div ref={(el) => (this.mapContainer = el)} className={classes.map} />
      </div>
    );
  }
}

Map.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default withStyles(mapStyles, { withTheme: true })(Map);
