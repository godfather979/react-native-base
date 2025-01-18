import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform, Alert } from 'react-native';
import Mapbox from '@rnmapbox/maps';

Mapbox.setAccessToken('sk.eyJ1IjoiZ29kZmF0aGVyOTc5IiwiYSI6ImNtNjJleXVyMzB2MW0ya3NlZmlsMXJrY2kifQ.QIR7hS_YNX3FT-2JbTu4Qg');

const Map = () => {
  const [locationPermissionGranted, setLocationPermissionGranted] = useState(false);

  // Function to request location permissions
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show your position on the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setLocationPermissionGranted(true);
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to use this feature.'
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // iOS permissions handled automatically with Mapbox
      setLocationPermissionGranted(true);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {locationPermissionGranted ? (
          <Mapbox.MapView style={styles.map}>
            <Mapbox.UserLocation visible={true} />
            <Mapbox.Camera
              zoomLevel={14}
              centerCoordinate={[77.5946, 12.9716]} // Default coordinates (Bangalore, India)
            />
          </Mapbox.MapView>
        ) : (
          <View style={styles.permissionDenied}>
            {/* This view will be shown if location permission is denied */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
  permissionDenied: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300,
    backgroundColor: '#f8d7da',
  },
});

export default Map;
