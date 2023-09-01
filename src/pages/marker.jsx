/* eslint-disable react/prop-types */
import { icon } from "leaflet";
import { Marker, Popup, useMap } from "react-leaflet";
import iconmap from "../assets/icon-map.png";

const myIcon = icon({ iconUrl: iconmap, iconSize: [25, 25] });

const markers = [
  {
    id: "marker 1",
    position: [52.16626663307832, 21.284996892987465],
  },
  {
    id: "marker 2",
    position: [52.162832107651234, 21.282467974979923],
  },
  {
    id: "marker 3",
    position: [52.14844205622174, 21.272100292008364],
  },
  {
    id: "marker 4",
    position: [52.139881318863196, 21.259214686659906],
  },
  {
    id: "marker 5",
    position: [52.14304397428956, 21.263681669441585],
  },
];

const MyMarker = ({ onClick }) => {
  const myMap = useMap();
  return (
    <>
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={myIcon}
          eventHandlers={{
            click: () => {
              //   myMap.setView(marker.position, 16);
              myMap.flyTo(marker.position, 16);
              console.log("the id of marker is: ", marker.id, marker.position);
              onClick(marker);
            },
          }}
        >
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      ))}
    </>
  );
};

export default MyMarker;
