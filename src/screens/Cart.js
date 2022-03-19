import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

const Cart = () => {
    
    const cartProduct = useSelector((state)=>state.products)
    // console.log(cartProduct);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {!cartProduct ? <Text style={styles.title}>No product</Text> : cartProduct.map((items, i) => {
                    return <View style={styles.card} key={i}>
                        <Image
                            style={styles.productImage}
                            source={{
                                uri: items.image
                              }}
                        />
                        <Text style={styles.title}>
                            {items.title}
                        </Text>
                        <Text style={styles.price}>$ {items.price}</Text>
                       

                    </View>
                })}
                
            </ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '600',
        color: '#000'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
        // overflow: 'scroll'
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: '#000'
    },
    price: {
        textAlign: 'center',
        marginVertical: 8,
        color: '#000'
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    productImage: {
        width: "100%",
        height: 200,
    },
    card:{
        marginBottom: 5
    }
});

export default Cart;