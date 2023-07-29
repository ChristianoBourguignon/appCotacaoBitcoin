import React from "react";
import {View,Text, Image} from 'react-native';
import styles from './styles'
export default function QuotationsItems(){
    return (
        <View style={styles.mainItems}>
            <View style={styles.contentItemsLeft}>
                <View style={styles.boxLogo}>
                        <Image 
                        style={styles.logoImg}
                        source={require('../../../img/bitcoin.png')}
                        />
                        <Text style={styles.dayCotation}>
                            29/07/2023
                        </Text>
                    </View>
                </View>
                <View style={styles.contentItemsRight}>
                    <Text style={styles.price}>
                        R$ -
                    </Text>
                </View>
            </View>
    )
}