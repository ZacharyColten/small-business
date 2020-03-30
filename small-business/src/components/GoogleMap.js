import React from "react";
import GoogleMapReact from "google-map-react";
import { Container } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const GoogleMap = props => {
  const AnyReactComponent = ({ text }) => (
    <div>
      <LocationOnIcon className="text-red" />
    </div>
  );

  const defaultProps = {
    center: {
      lat: props.lat,
      lng: props.lng
    },
    zoom: 11
  };

  return (
    <Container style={{ height: "600px", width: "1200px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBlDLQSMTBDuG13543uFoyRHM0pTrbpbUU" }}
        center={defaultProps.center}
        zoom={13}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={props.lat} lng={props.lng} />
      </GoogleMapReact>
    </Container>
  );
};
export default GoogleMap;