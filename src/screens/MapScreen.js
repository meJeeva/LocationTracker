import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const GOOGLE_MAPS_APIKEY = 'YOUR_GOOGLE_MAPS_API_KEY';

const MapScreen = () => {
    const [location, setLocation] = useState(null);
    const [destination, setDestination] = useState(null);
    const [route, setRoute] = useState([]);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            },
            error => console.log(error),
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }, []);



    return (
        <View style={{ flex: 1 }}>
            {location && (
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {/* {location && <Marker coordinate={location} />}
          {destination && <Marker coordinate={destination} />}
          {route.length > 0 && <Polyline coordinates={route} strokeWidth={5} strokeColor="blue" />} */}
                </MapView>
            )}
        </View>
    );
};

export default MapScreen;
