import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardBox = (props: any) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginLeft: '3%',
        marginRight: '3%',
        padding: '5%',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 10 },
        shadowOpacity: .3,
        shadowRadius: 5
    }
})

export default CardBox