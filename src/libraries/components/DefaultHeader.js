import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image, PixelRatio } from 'react-native';
import IconWithBadge from 'libraries/components/IconWithBadge'
import NavigationService from "routers/NavigationService";
import { BasicImageButton } from './ButtonTemplate/BasicButton'
import R from "res/R";

const headerHeight = Platform.OS === "ios" ? 44 : 56;
export const HEADER_HEIGHT = PixelRatio.get() <= 2 ? headerHeight - 10 : headerHeight

export default class DefaultHeader extends PureComponent {

    render() {
        const { onPressLeftButton, onPressRightButton, iconRight, iconLeft, headerTitle } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerContent}>
                    {
                        (iconLeft) && (
                            <BasicImageButton
                                onPress={onPressLeftButton}
                                buttonStyle={styles.iconLeftStyle}
                                imageSource={iconLeft}
                                imageStyle={styles.iconStyle}
                            />)
                    }
                    <View style={styles.headerTitle}>
                        {this.props.isHomeScreen ?
                            (<Image
                                source={R.images.logo.app_logo_home}
                                style={styles.logoHome}
                                resizeMode='contain'
                            />) :
                            (<Text style={styles.titleContentStyle}>{headerTitle}</Text>)
                        }
                    </View>
                    {
                        (iconRight) && (
                            <TouchableOpacity
                                style={styles.iconRightStyle}
                                onPress={onPressRightButton}
                            >
                                <IconWithBadge
                                    iconSource={iconRight}
                                    iconStyle={styles.iconStyle}
                                    badgeCount={3}
                                />
                            </TouchableOpacity>
                        )
                    }

                </View>
            </View>
        );
    }
}

DefaultHeader.defaultProps = {
    onPressLeftButton: () => { NavigationService.pop() }
}



const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        width: "100%",
        backgroundColor: R.colors.primaryColor,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        margin: 5,
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContentStyle: {
        color: 'white',
        fontSize: R.size.textSize.header,
        textAlign: 'center',
        fontFamily: R.fonts.title,
    },
    iconRightStyle: {
        position: 'absolute',
        right: 10,
    },
    iconLeftStyle: {
        position: 'absolute',
        left: 5,
    },
    iconStyle: {
        width: R.size.iconSize.iconButton,
        height: R.size.iconSize.iconButton,
        resizeMode: 'contain',
    },
    logoHome: {
        flex: 1,
    }
})