import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet } from 'react-native';

const Belanja = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = () => {
        const URL = "https://fakestoreapi.com/products";

        fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setProducts(data);
            console.log(data);
        });
    };
    return (
        <View>
            <FlatList
            showsHorizontalScrollIndicator={false}
                data={products}
                renderItem={({ item}) => (
                    <View style={styles.cardContainer}>
                      <Image source={{ uri: item.image}} style={styles.image} />
                      <Text style={{ fontSize: 23, textAlign: "center", color: 'black'}}>
                        {item.price}
                      </Text>
                    </View>
                )}
             />
        </View>
    );
};
       

export default Belanja;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#A9A9A9",
        borderRadius: 70,
        padding: 50,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: { width: 9, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        marginTop: 30,    
    },
    image: {
        height: 300,
        width: 220,
    },
});