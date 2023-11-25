import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Beranda from './screens/Beranda';
import Belanja from './screens/Belanja';
import Profil from './screens/Profil';

const berandaName = "Beranda";
const belanjaName = "Belanja";
const profilName = "Profil";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={berandaName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === berandaName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === belanjaName) {
              iconName = focused ? 'cart' : 'cart-outline';

            } else if (rn === profilName) {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOpsion={{
            activeTintColor: 'blue',
            inactiveTintColor: '#A9A9A9',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={berandaName} component={Beranda} />
        <Tab.Screen name={belanjaName} component={Belanja} />
        <Tab.Screen name={profilName} component={Profil} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;