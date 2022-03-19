import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Image, Text, ScrollView } from 'react-native';
import { useDispatch  } from 'react-redux';

const Separator = () => (
    <View style={styles.separator} />
);

const Home = ({ navigation }) => {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {

        const getData = async () => {
            try {
                const res = await fetch('https://dummyjson.com/products')
                const data = await res.json()
                const sanitizedData = data.products.map((fetchProducts) => {
                    // console.log("PRoduct==>",fetchProducts)
                    const id = fetchProducts.id
                    const title = fetchProducts.title
                    const price = fetchProducts.price
                    const image = fetchProducts.thumbnail
                    return {
                        id,
                        title,
                        price,
                        image
                    }
                })
                // console.log("SanitizedData==>",sanitizedData)
                setProduct(sanitizedData)

            } catch (error) {
                console.log(error);
            }

            setLoading(true)
        }
        getData()

    }, [])

    const addToCart = (id) => {
        // console.log(id)
        const addedProduct = product.find(items =>items.id === id)
        // console.log(addedProduct);
        dispatch({
            type: "ADDPRODUCTS",
            payload: addedProduct
        })
    }

    // const totalProduct = useSelector((state)=>state.products)
    // console.log(totalProduct);

    if (!loading) {
        return <Text style={styles.title}>Loading.....</Text>
    }

    return (

        <SafeAreaView style={styles.container}>
            <ScrollView>

                <Button
                    title="cart"
                    onPress={() => navigation.navigate('Cart')}
                />
                <Separator />

                {product.map((items, i) => {
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
                        <Button
                            title="Add To Cart"
                            onPress={() => addToCart(items.id)}
                        />

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

export default Home;