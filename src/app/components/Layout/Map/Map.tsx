// import React, { useEffect, useState } from 'react';
// import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
// const { SearchBox } = require('react-google-maps/lib/components/places/SearchBox');

// interface Coords {
//   lat: number;
//   lng: number;
// }
// const Map = () => {
//   const [coords, setCoords] = useState<Coords | null>(null);
//   // const AnyReactComponent = ({ text }) => <div>{text}</div>
//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(({ coords: { longitude: longitude, latitude } }) => {
//       setCoords({ lat: latitude, lng: longitude });
//     });
//   }, []);

//   return (
//     <div>
//       <GoogleMap defaultZoom={17} defaultCenter={coords} center={coords}>
//         <Marker
//           icon={{
//             url: 'https://w7.pngwing.com/pngs/385/447/png-transparent-red-location-logo-north-providence-johnston-location-computer-icons-windows-maps-for-icons-miscellaneous-angle-heart.png',
//             scaledSize: new (window as any).google.maps.Size(40, 40), // Adjust the size as needed
//           }}
//           position={coords}
//         />
//       </GoogleMap>
//     </div>
//   );
// };

// export default withScriptjs(withGoogleMap(Map));

import React from 'react';
import GoogleMapReact from 'google-map-react';
import { IonIcon } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

export default function SimpleMap(prop: any) {
  const { coords } = prop;
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDWTx7bREpM5B6JKdbzOvMW-RRlhkukmVE' }}
        defaultCenter={coords}
        defaultZoom={17}
        center={coords}
      >
        <AnyReactComponent
          lat={coords?.lat}
          lng={coords?.lng}
          text={
            <IonIcon style={{ color: 'red', fontSize: '40px' }} icon={locationOutline}></IonIcon>
          }
        ></AnyReactComponent>
      </GoogleMapReact>
    </div>
  );
}
