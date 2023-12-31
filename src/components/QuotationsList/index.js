import React, { Fragment } from "react";
import {View,Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import styles from './styles'
export default function QuotationsList(){
    return (
        <Fragment>
        <View style={styles.headerQuotations}>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> <View/>}>
                <Text style={styles.textButtonQuery}>7D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> <View/>}>
                <Text style={styles.textButtonQuery}>15D</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> <View/>}>
                <Text style={styles.textButtonQuery}>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> <View/>}>
                <Text style={styles.textButtonQuery}>3M</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonQuery} onPress={()=> <View/>}>
                <Text style={styles.textButtonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        </Fragment>
    )
}