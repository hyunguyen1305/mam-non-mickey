import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBw2G2wQHob4UgpPszqXgF2E6Ufubcg5HU&libraries=drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  return (
    <GoogleMap
      defaultZoom={18}
      defaultCenter={{
        lat: props.dataLocation.lat,
        lng: props.dataLocation.lng,
      }}
    >
      {props.isMarkerShown && (
        <>
          <Marker
            position={{
              lat: props.dataLocation.lat,
              lng: props.dataLocation.lng,
            }}
          />
          <InfoWindow
            position={{
              lat: props.dataLocation.lat + 0.0002,
              lng: props.dataLocation.lng,
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                <span style={{ color: "red", fontSize: "1.2em" }}>
                  {props.name}
                </span>{" "}
                - {props.address}
              </span>
            </div>
          </InfoWindow>
        </>
      )}
    </GoogleMap>
  );
});

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  };

  componentDidMount() {
    this.delayedShowMarker();
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
        dataLocation={this.props.dataLocation}
        name={this.props.name}
        address={this.props.address}
      />
    );
  }
}
export default MyFancyComponent;
