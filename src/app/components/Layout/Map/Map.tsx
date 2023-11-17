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
