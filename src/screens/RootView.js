import React, { Component, NetInfo, Modal } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import R from 'res/R';

class RootView extends Component {
   
    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.props.children}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: R.colors.primaryColor,
    }
})

export default RootView;
