import React, { Component } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

export class BasicTextButton extends Component {

    static propTypes = {
        buttonStyle: PropTypes.object,
        text: PropTypes.string.isRequired,
        textStyle: PropTypes.object,
        onPress: PropTypes.func,
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                onPress={this.props.onPress}
                style={this.props.buttonStyle}>
                <Text style={this.props.textStyle}>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }
}

export class BasicImageButton extends Component {
    static propTypes = {
        buttonStyle: PropTypes.object,
        imageStyle: PropTypes.object,
        onPress: PropTypes.func,
    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={this.props.buttonStyle}>
                <Image
                    source={this.props.imageSource}
                    style={this.props.imageStyle}
                />
            </TouchableOpacity>
        );
    }
}

