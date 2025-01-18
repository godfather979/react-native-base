import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, Text} from 'react-native';
import Tutorial from './Tutorial';
import Rewards from './Rewards';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (<>
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', {name: 'Jane'})
      }
    />
    <Button
      title="Go to tutorials"
      onPress={() =>
        navigation.navigate('Tutorial')
      }
    />
    <Button
      title="Go to rewards"
      onPress={() =>
        navigation.navigate('Rewards')
      }
    />

    </>
    
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="Rewards" component={Rewards} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;