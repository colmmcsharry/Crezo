import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '380px',
  height: '380px',
  marginTop: '50px',
  

};

const center = {
  lat: 
49.270696037443976,
  lng: -123.01598650000001
};


const position = {
  lat: 49.2701,
  lng: -123.0159
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

function MyMap() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDcIN0YhwEXqiyOfcMVParFrCCvLUaUrYs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        position={position}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyMap)

