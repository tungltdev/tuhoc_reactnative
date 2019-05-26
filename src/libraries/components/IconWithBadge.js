import React, { Component } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default class IconWithBadge extends Component {
    render() {
        const { badgeCount } = this.props;
        return (
            <View style={styles.iconContainerStyle}>
                <Image
                    source={this.props.iconSource}
                    style={this.props.iconStyle}
                />
                {badgeCount > 0 && (
                    <View style={styles.badgesViewStyle}>
                        <Text style={styles.badgesTextStyle}>{badgeCount}</Text>
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    iconContainerStyle: { 
        width: 24, 
        height: 24, 
     },
    badgesViewStyle: {
        position: 'absolute',
        right: -2,
        top: 0,
        backgroundColor: 'red',
        borderRadius: 7,
        width: 14,
        height: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    badgesTextStyle: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    }
})