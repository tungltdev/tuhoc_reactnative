import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import { pixelRatio } from 'screens/RootView'

export default class BasicIcon extends Component {
    render() {
        return (
            <Image
                source={this.props.iconSource}
                style={[styles.iconStyle, this.props.iconStyle]}
            />
        )
    }
}

const styles = StyleSheet.create({
    iconStyle: {
        width: pixelRatio <= 2 ? 16 : 20,
        height: pixelRatio <= 2 ? 16 : 20,
        resizeMode: 'contain',
    },
})