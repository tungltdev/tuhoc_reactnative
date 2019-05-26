import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Platform } from 'react-native'
import R from 'res/R';

export class BasicTextInput extends Component {
    static defaultProps = {
        keyboardType: 'default',
    }
    render() {
        return (
            <View style={[styles.container, this.props.otherStyle]}>
                <TextInput
                    style={styles.textInputStyle}
                    keyboardType={this.props.keyboardType}
                    placeholderTextColor={R.colors.primaryBlurTextColor}
                    placeholder={this.props.textHidden}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 45,
        borderColor:R.colors.grey500,
        borderWidth: 0.2,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    textInputStyle: {
        alignItems: 'stretch',
        flex: 1,
        fontFamily: R.fonts.subContent,
    }
})