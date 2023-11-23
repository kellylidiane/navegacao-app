import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default props => {
    return (
        <View style={[styles.container, { backgroundColor: props.corFundo || '#000' }]}>
            <Text style={{ fontSize: 50, color: props.corTexto || '#FFF' }}>{props.children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
