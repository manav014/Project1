import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { makeStyles } from "@material-ui/core/styles";
import marker from "../../assets/HomePage/marker.png";
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
const useMapStyles = makeStyles(mapStyles);
// var stores = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [77.771425, 28.730614],
//       },
//       properties: {
//         phoneFormatted: "(202) 234-7336",
//         phone: "2022347336",
//         address: "1471 P St NW",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "at 15th St NW",
//         postalCode: "20005",
//         state: "D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [77.4889323, 28.679584],
//       },
//       properties: {
//         phoneFormatted: "(202) 507-8357",
//         phone: "2025078357",
//         address: "2221 I St NW",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "at 22nd St NW",
//         postalCode: "20037",
//         state: "D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.043929, 38.910525],
//       },
//       properties: {
//         phoneFormatted: "(202) 387-9338",
//         phone: "2023879338",
//         address: "1512 Connecticut Ave NW",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "at Dupont Circle",
//         postalCode: "20036",
//         state: "D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.0672, 38.90516896],
//       },
//       properties: {
//         phoneFormatted: "(202) 337-9338",
//         phone: "2023379338",
//         address: "3333 M St NW",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "at 34th St NW",
//         postalCode: "20007",
//         state: "D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.002583742142, 38.887041080933],
//       },
//       properties: {
//         phoneFormatted: "(202) 547-9338",
//         phone: "2025479338",
//         address: "221 Pennsylvania Ave SE",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "btwn 2nd & 3rd Sts. SE",
//         postalCode: "20003",
//         state: "D.C.",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-76.933492720127, 38.99225245786],
//       },
//       properties: {
//         address: "8204 Baltimore Ave",
//         city: "College Park",
//         country: "United States",
//         postalCode: "20740",
//         state: "MD",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.097083330154, 38.980979],
//       },
//       properties: {
//         phoneFormatted: "(301) 654-7336",
//         phone: "3016547336",
//         address: "4831 Bethesda Ave",
//         cc: "US",
//         city: "Bethesda",
//         country: "United States",
//         postalCode: "20814",
//         state: "MD",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.359425054188, 38.958058116661],
//       },
//       properties: {
//         phoneFormatted: "(571) 203-0082",
//         phone: "5712030082",
//         address: "11935 Democracy Dr",
//         city: "Reston",
//         country: "United States",
//         crossStreet: "btw Explorer & Library",
//         postalCode: "20190",
//         state: "VA",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.10853099823, 38.880100922392],
//       },
//       properties: {
//         phoneFormatted: "(703) 522-2016",
//         phone: "7035222016",
//         address: "4075 Wilson Blvd",
//         city: "Arlington",
//         country: "United States",
//         crossStreet: "at N Randolph St.",
//         postalCode: "22203",
//         state: "VA",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-75.28784, 40.008008],
//       },
//       properties: {
//         phoneFormatted: "(610) 642-9400",
//         phone: "6106429400",
//         address: "68 Coulter Ave",
//         city: "Ardmore",
//         country: "United States",
//         postalCode: "19003",
//         state: "PA",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-75.20121216774, 39.954030175164],
//       },
//       properties: {
//         phoneFormatted: "(215) 386-1365",
//         phone: "2153861365",
//         address: "3925 Walnut St",
//         city: "Philadelphia",
//         country: "United States",
//         postalCode: "19104",
//         state: "PA",
//       },
//     },
//     {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [-77.043959498405, 38.903883387232],
//       },
//       properties: {
//         phoneFormatted: "(202) 331-3355",
//         phone: "2023313355",
//         address: "1901 L St. NW",
//         city: "Washington DC",
//         country: "United States",
//         crossStreet: "at 19th St",
//         postalCode: "20036",
//         state: "D.C.",
//       },
//     },
//   ],
// };

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzdGluZzEyMzQyNTEyNTQxIiwiYSI6ImNraGFud2ZyYjE1eWUycG5xMTA3b2lrZTcifQ.utAlAYrt6I8LmG1Uyhn4ug";

// const MapComponent = () => {
//   const mapclasses = useMapStyles();

//   const mapContainer = useRef();
//   const [lng, setLng] = useState(77.77142);
//   const [lat, setLat] = useState(29.73061);
//   const [zoom, setZoom] = useState(13);

//   function successLocation(position) {
//     setLng(position.coords.longitude);
//     setLat(position.coords.latitude);
//   }
//   function errorLocation() {
//     setLng(lng);
//     setLat(lat);
//   }
//   navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//     enableHighAccuracy: true,
//   });

//   useEffect(() => {
//     const map = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/streets-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });
//     var marker = new mapboxgl.Marker({
//       color: "#37b3f9",
//       draggable: true,
//     })
//       .setLngLat([lng, lat])
//       .addTo(map);

//     // HELP: to get the longitude and latitude of a marker
//     // var lngLat = marker.getLngLat();

//     map.on("move", () => {
//       setLng(map.getCenter().lng.toFixed(4));
//       setLat(map.getCenter().lat.toFixed(4));
//       setZoom(map.getZoom().toFixed(2));
//     });

//     return () => map.remove();
//   }, []);

//   return (
//     <div>
//       <div className={mapclasses.map} ref={mapContainer} />
//     </div>
//   );
// };

export default function Map(props) {
  const mapclasses = useMapStyles();
  const mapContainer = useRef();
  const [lng, setLng] = useState(77.77142);
  const [lat, setLat] = useState(28.73061);
  const [zoom, setZoom] = useState(16);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);
      },
      () => {},
      {
        enableHighAccuracy: true,
      }
    );
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
    new mapboxgl.Marker({
      color: "#37b3f9",
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map);
    // map.scrollZoom.disable();
    // map.boxZoom.enable();
    // map.scrollZoom.setWheelZoomRate(1 / 600);
    // HELP: to control the drag intensity of map in map container
    // map.dragPan.enable({
    //   linearity: 0.3,
    //   // easing: bezier(0, 0, 0.3, 1),
    //   maxSpeed: 1400,
    //   deceleration: 2500,
    // });
    // HELP: to get the longitude and latitude of a marker
    // var lngLat = marker.getLngLat();
    // map.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true,
    //     },
    //     trackUserLocation: true,
    //   })
    // );
    // HELP: to disable ctrl+scroll to zoom
    // map.boxZoom.disable();
    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });
    // return () => map.remove();
  }, []);

  return (
    <div>
      <div className={mapclasses.map} ref={mapContainer} />
    </div>
  );
}
