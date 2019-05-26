import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import R from 'res/R'

import { width } from 'screens/RootView'

export default class ShoppingButton extends Component {
    render() {
        return (
            <View style={styles.buttonContainer}>
                <View style={styles.buttonContent}>
                    <View style={styles.priceView}>
                        <Text style={styles.priceText}>{this.props.totalPrice}</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonAction}
                        onPress={this.props.onClickShopping}
                    >
                        <View style={styles.triangleCornerBottomRight} />
                        <Text style={styles.actionText}>{this.props.textAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: width,
        height: 50,
        bottom: 0,
        backgroundColor: R.colors.primaryWhiteColor,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    buttonAction: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: R.colors.primaryColor,
        marginLeft: 50,
    },
    priceView: {
        width: '50%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    priceText: {
        fontSize: 18,
        fontFamily: R.fonts.title,
        color: R.colors.primaryColor,
    },
    actionText: {
        fontSize: 18,
        fontFamily: R.fonts.title,
        color: R.colors.white100,
    },
    triangleCornerBottomRight: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 50,
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        position: 'absolute',
        bottom: 0,
        left: -50,
        transform: [
            { rotate: '180deg' }
        ],
        borderTopColor: R.colors.primaryColor,
    }
})