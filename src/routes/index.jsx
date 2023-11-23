import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';
import Tab from './Tab';
// import Drawer from './Drawer'; // bugado

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                {/* <Stack />
                <Tab /> 
                <Drawer />*/}
                <Tab /> 
            </NavigationContainer>
        </SafeAreaView>
    );
};
