import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { makeStyles } from "@material-ui/core/styles";

const mapStyles = {
  map: {
    position: "absolute",
    top: "0",
    right: "0",
    left: "0",
    bottom: "0",
  },
};
const useMapStyles = makeStyles(mapStyles);

mapboxgl.accessToken =
  "pk.eyJ1IjoidGVzdGluZzEyMzQyNTEyNTQxIiwiYSI6ImNraGFud2ZyYjE1eWUycG5xMTA3b2lrZTcifQ.utAlAYrt6I8LmG1Uyhn4ug";

const MapComponent = () => {
  const mapclasses = useMapStyles();

  const mapContainer = useRef();
  const [lng, setLng] = useState(77.77142);
  const [lat, setLat] = useState(28.73061);
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []);

  return (
    <div>
      <div className={mapclasses.map} ref={mapContainer} />
    </div>
  );
};

export default function Map(props) {
  return <MapComponent></MapComponent>;
}
