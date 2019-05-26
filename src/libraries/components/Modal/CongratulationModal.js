import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import R from 'res/R'

class CongratulationModal extends Component {
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.isModalVisible}
                onRequestClose={this.props.onCloseModal}>
                <TouchableWithoutFeedback onPress={this.props.onCloseModal}>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContainer}>
                            <View>
                                <Text style={styles.modalTitleText}>{this.props.modalTitle}</Text>
                            </View>
                            <View style={styles.modalContentView}>
                                <Image
                                    source={R.images.iconApp.ic_congratulation}
                                    style={styles.iconStyle}
                                />
                                <Text style={styles.contentTextStyle}>{this.props.modalContent}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>

            </Modal>
        )
    }
}

export default CongratulationModal

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        right: 25,
        left: 25,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
    },
    modalTitleText: {
        fontSize: R.size.textSize.title,
        textAlign: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: R.colors.primaryBorderColor,
        padding: 20,
        fontFamily: R.fonts.title,
        color: R.colors.primaryColor,
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
    },
    iconStyle: {
        width: 60,
        height: 60,
        resizeMode: 'contain'
    },
    contentTextStyle: {
        fontFamily: R.fonts.subContent,
        fontSize: R.size.textSize.content,
        textAlign: 'center',
        marginTop: 15,
    },
    modalContentView: {
        paddingHorizontal: 45,
        paddingVertical: 20,
        alignItems: 'center',
    }
})