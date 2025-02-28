import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Icons from "react-native-vector-icons/EvilIcons";

const PsychiatristCard = ({ imgUrl, name, speciality, address }) => {
    return (
        <View style={styles.container}>
            <View style={styles.avatar}>
                <Image style={styles.image} source={{uri: imgUrl}} />
            </View>
            <View style={styles.info}>
                <Text style={{ fontWeight: "bold", fontSize: '16' }}>{name}</Text>
                <View style = {styles.lineStyle} />
                <Text style={{ fontSize: '14', fontWeight: "semibold", color: '#4B5563' }}>{speciality}</Text>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
                    <Icons name="location" size={20} color="#4B5563" />
                    <Text style={{ fontSize: '14', color: '#4B5563' }}>{address}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        borderRadius: 12,
        padding: 12,
        width: 'auto',
        height: 133,
        backgroundColor: "#fff",
        shadowColor: "#000000",  // Shadow color
        borderColor: "black",  // Border color
        shadowOffset: { width: 0, height: 2 },  // Shadow offset
        shadowOpacity: 0.25,  // Shadow opacity
        elevation: 15,  // Shadow effect on Android
        borderRadius: 12,
    },
    info: {
        flexDirection: "column",
        gap: 8
    },
    avatar: {
        height: 109,
        width: 109,
        borderRadius: 12

    },
    image: {
        width: 109,
        height: 109,
        borderRadius: 12
      },
      lineStyle:{
        borderWidth: 0.5,
        borderColor:'#E5E7EB',
        // marginVertical: 8
   }
})

export default PsychiatristCard;
