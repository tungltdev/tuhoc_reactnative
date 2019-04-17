import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import R from "res/R"
export default class ItemProfile extends Component {
    render() {
        const { item, onPress } = this.props
        return (
            <TouchableOpacity style={styles.subGroup} onPress={onPress}>
                <Image
                    source={item.src}
                    resizeMode="contain"
                    style={styles.imageIcon} />

                <View style={styles.contentGroup}>
                    <Text style={{ fontSize: 15 }}>{item.title}</Text>
                    <Image
                        source={R.images.profile.ic_right}
                        resizeMode="contain"
                        style={styles.imageLeft} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    subGroup: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    imageLeft: {
        width: 16,
        height: 16,
        marginRight: 15,
    },

    contentGroup: {
        paddingVertical: 14,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#999999',
        marginLeft: 10,
    },

    imageIcon: {
        width: 24,
        height: 24
    }
})