import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import FastImage from 'react-native-fast-image';
import { URL_IMAGE } from 'libraries/utils/imageUrl'
import { convertDateFormat } from 'libraries/utils/utils'
import R from 'res/R'

export default class DiscountItem extends Component {
    render() {
        return (
            <TouchableOpacity
                style={styles.itemDiscountStyle}
                onPress={this.props.onClickItem}
            >
                <FastImage
                    source={{ uri: URL_IMAGE.urlImageDiscount(this.props.item.image) }}
                    resizeMode={FastImage.resizeMode.stretch}
                    style={styles.discountItemImageStyle}
                />
                <View style={styles.contentTextView}>
                    <Text style={styles.discountItemTitle}>{this.props.item.name}</Text>
                    <Text style={styles.discountTime}>Từ {convertDateFormat(this.props.item.start)} đến {convertDateFormat(this.props.item.expires)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemDiscountStyle: {
        borderRadius: 5,
        marginHorizontal: 3,
        justifyContent: 'flex-end',
        backgroundColor: R.colors.primaryWhiteColor,
        marginTop: 8,
    },
    discountItemImageStyle: {
        width: '100%',
        height: 150
    },
    discountItemTitle: {
        fontSize: 16,
        fontFamily: R.fonts.title
    },
    discountTime: {
        fontSize: R.size.textSize.subContent,
        color: R.colors.primaryBlurTextColor,
        marginTop: 5,
        fontFamily: R.fonts.subContent
    },
    contentTextView: {
        padding: 10,
    },
})