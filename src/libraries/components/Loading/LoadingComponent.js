import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Spinner from 'react-native-spinkit';
import R from 'res/R'
import PropTypes from 'prop-types';


class LoadingComponent extends Component {

    static defaultProps = {
        spinnerSize: 40,
        spinnerType: 'Circle',
        spinnerColor: R.colors.primaryColor,
    }

    static propTypes = {
        spinnerSize: PropTypes.number,
        spinnerType: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <Spinner isVisible={true} size={this.props.spinnerSize} type={this.props.spinnerType} color={this.props.spinnerColor} />
            </View>
        );
    }
}

export default LoadingComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
