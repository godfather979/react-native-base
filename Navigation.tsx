import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@rnmapbox/maps';

const getRoute = async (start, end) => {
  const accessToken = 'sk.eyJ1IjoiZ29kZmF0aGVyOTc5IiwiYSI6ImNtNjJleXVyMzB2MW0ya3NlZmlsMXJrY2kifQ.QIR7hS_YNX3FT-2JbTu4Qg';
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${accessToken}`;

  try {
    const response = await axios.get(url);
    return response.data.routes[0].geometry.coordinates;
  } catch (error) {
    console.error('Error fetching route:', error);
    return [];
  }
};



Mapbox.setAccessToken('sk.eyJ1IjoiZ29kZmF0aGVyOTc5IiwiYSI6ImNtNjJleXVyMzB2MW0ya3NlZmlsMXJrY2kifQ.QIR7hS_YNX3FT-2JbTu4Qg');

const NavigationMap = () => {
  const [route, setRoute] = useState([]);

  useEffect(() => {
    const fetchRoute = async () => {
      const start = [19.165674012620414, 72.93573204748941]; // Bangalore
      const end = [19.123005256727968, 72.83610466653113]; // Example destination
      const coordinates = await getRoute(start, end);
      setRoute(coordinates);
    };

    fetchRoute();
  }, []);

  return (
    <View style={styles.container}>
      <Mapbox.MapView style={styles.map}>
        <Mapbox.Camera
          zoomLevel={14}
          centerCoordinate={[77.5946, 12.9716]} // Starting point
        />
        {route.length > 0 && (
          <Mapbox.ShapeSource
            id="routeSource"
            shape={{
              type: 'Feature',
              geometry: {
                type: 'LineString',
                coordinates: route,
              },
            }}
          >
            <Mapbox.LineLayer
              id="routeLayer"
              style={{ lineColor: 'blue', lineWidth: 4 }}
            />
          </Mapbox.ShapeSource>
        )}
      </Mapbox.MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default NavigationMap;
