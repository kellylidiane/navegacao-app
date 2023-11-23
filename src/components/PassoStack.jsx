import React from 'react';
import {
    Button,
    StyleSheet,
    View,
} from 'react-native';

export default props => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {props.voltar ? <Button 
                    title='Voltar'
                    onPress={() => props.navigation.goBack()} 
                /> : false}
                {props.avancar ? <Button 
                    title='Avançar'
                    onPress={() => {
                        props.navigation.push(
                            props.avancar, 
                            props.avancarParam || { numero: parseInt(Math.random() * 100) }
                        )}} 
                /> : false}
            </View>
            <View style={styles.container}>
                {props.children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
