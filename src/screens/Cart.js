import React from 'react';
import { Text, View,StyleSheet } from 'react-native';


const Cart = () => {
    return (
        <View>
            <Text style={styles.sectionTitle}>Cart Screen</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
        color:'#000'
    }
});

export default Cart;