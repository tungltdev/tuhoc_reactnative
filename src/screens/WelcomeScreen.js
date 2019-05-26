import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions, } from 'react-native'
import R from 'res/R'
import { BasicTextButton } from 'libraries/components/ButtonTemplate/BasicButton'
import NavigationService from 'routers/NavigationService'
import { LOADING_SCREEN } from 'libraries/utils/screenNames'

const { width, height } = Dimensions.get('screen');

class WelcomeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFocused: true
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentView}>
                    <Image
                        source={R.images.logo.logoWelcome}
                        style={styles.welcomeLogo}
                        resizeMode='contain'
                    />
                    <Text style={styles.textWelcome}> {R.strings.welcomeText.welcome} </Text>
                    <Text style={styles.detailWelcome}> {R.strings.welcomeText.content} </Text>
                </View>
                <BasicTextButton
                    buttonStyle={styles.buttonStyle}
                    text='BẮT ĐẦU NGAY!'
                    textStyle={styles.textButton}
                    onPress={this.onStartingApp}
                />
            </View>
        )
    }

    componentDidMount = () => {
        setTimeout(this.onStartingApp, 3000)
    };

    onStartingApp = () => {
        // if (this.state.isFocused) {
        //     this.setState({
        //         isFocused: false
        //     }, NavigationService.navigate(LOADING_SCREEN))
        // }
    }
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    contentView: {
        alignItems: 'center',
        padding: 25,
        justifyContent: 'center'
    },
    welcomeLogo: {
        width: width / 1.8,
        height: width / 1.8,
    },
    textWelcome: {
        fontSize: 22,
        color: R.colors.primaryColor,
        marginTop: 30,
        fontFamily: R.fonts.content,
    },
    detailWelcome: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 15,
        fontFamily: R.fonts.content,
    },
    buttonStyle: {
        backgroundColor: R.colors.primaryColor,
        width: width - 100,
        height: R.size.buttonSize.bigHeight,
        borderRadius: 5,
        justifyContent: 'center',
    },
    textButton: {
        color: 'white',
        fontSize: R.size.textSize.subContent,
        textAlign: 'center',
        fontFamily: R.fonts.title,
    }
})