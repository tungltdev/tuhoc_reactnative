import React, { Component } from 'react'
import { Text, View, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'
import { BasicTextButton } from '../ButtonTemplate/BasicButton'
import R from 'res/R'

class NotificationModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalVisible: true
        }
    }
    render() {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible}
                onRequestClose={this.onCloseModal}>
                <TouchableWithoutFeedback onPress={this.onCloseModal}>
                    <View style={styles.modalOverlay} />
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContentView}>
                            <Text style={styles.contentTextStyle}>{this.props.modalContent}</Text>
                        </View>
                        <BasicTextButton
                            onPress={this.onCloseModal}
                            textStyle={styles.textButtonStyle}
                            text={this.props.textButton}
                            buttonStyle={styles.buttonStyle}
                        />
                    </View>
                </View>
            </Modal>
        )
    }
    onCloseModal = () => {
        this.setState({
            isModalVisible: false
        })
    }
}

export default NotificationModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    modalContainer: {
        position: 'absolute',
        right: 25,
        left: 25,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
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
        borderBottomWidth: 0.7,
        borderBottomColor: R.colors.primaryBorderColor,
    },
    textButtonStyle: {
        fontFamily: R.fonts.title,
        fontSize: R.size.textSize.content,
        color: R.colors.primaryColor,
    },
    buttonStyle: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
})