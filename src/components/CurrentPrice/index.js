import React from "react";
import { View, Text } from "react-native";
import styles from './styles.js'

export default function CurrentPrice() {
    return (
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>R$ -</Text>
            <Text style={styles.textPrice}>Ultima Cotação</Text>
        </View>
    
    )
}

