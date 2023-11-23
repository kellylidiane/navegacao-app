import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import { Ionicons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default props => {
    return (
      <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'TelaA':
              iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
              break;
            case 'TelaB':
              iconName = focused
              ? 'ios-flower'
              : 'ios-flower-outline';
              break;
            case 'TelaC':
                iconName = focused
                ? 'ios-leaf'
                : 'ios-leaf-outline';
              break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        showLabel: true,
        // labelStyle: { fontSize: 30 }
      }} initialRouteName="TelaB">
        <Tab.Screen name="TelaA" component={TelaA} 
          options={{ title: 'Início' }} />
        <Tab.Screen name="TelaB" component={TelaB} />
        <Tab.Screen name="TelaC" component={TelaC} initialParams={{ numero: 13 }} />
    </Tab.Navigator>
    );
};
