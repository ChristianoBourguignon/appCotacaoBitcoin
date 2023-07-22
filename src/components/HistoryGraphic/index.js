import React from "react";
import {View,Text} from 'react-native';
import styles from './styles'
export default function HistoryGraphic(){
    return (
        <View style={styles.headerHistory}>
            <Text style={styles.oldPrice}></Text>
            <Text style={styles.textPrice}></Text>
        </View>
    )
}