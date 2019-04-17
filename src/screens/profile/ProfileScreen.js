import React, { Component } from 'react'
import {
    Text, View,
    StyleSheet, Image,
    PixelRatio, TouchableOpacity,
    AsyncStorage, Dimensions,
    FlatList
} from 'react-native'
import R from "res/R";
import ItemProfile from "screens/profile/ItemProfile";
import NavigationService from "routers/NavigationService";
import LoginRequireScreen from '../login_require_screen/LoginRequireScreen'
import Loading from 'libraries/components/Loading';
import Header from 'libraries/components/HeaderCustom';
import { getProfileApi } from "libraries/networking/apis";


import * as screenNames from 'libraries/utils/screenName';
const { width, height } = Dimensions.get('screen');


const itemIcons = [
    { src: R.images.profile.ic_order, id: 0, title: "Đơn hàng của tôi" },
    { src: R.images.profile.ic_address_recevice, id: 1, title: "Địa chỉ nhận hàng" },
    { src: R.images.profile.ic_voucher, id: 2, title: "Vourcher của tôi" },
    { src: R.images.profile.ic_store_contact, id: 3, title: "Liên hệ với đại lý" },
    { src: R.images.profile.ic_change_pass, id: 4, title: "Thay đổi mật khẩu" },
]

const TYPE_VOUCHER_VIEW = 1;

export default class ProfileScreen extends Component {

    static navigationOptions = {
        tabBarLabel: "Cá nhân",
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={R.images.bottomBar.ic_profile}
                style={[styles.icon, { tintColor: tintColor }]}
                resizeMode="contain"
            />
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            token: null,
            isLogin: false,
            isLoading: true,
            name: "",
            email: "",
            avatar: "",
        };
    }

    componentDidMount() {
    }

    componentWillMount() {
        this.getDataLocal()

    }

    getProfile = (token) => {
        getProfileApi(token).then(res => {
            if (res.ok == 1) {
                this.setState({
                    name: res.data.info.name,
                    avatar: res.data.info.avatarview,
                    email: res.data.info.email,
                    isLogin: true,
                    token: token,
                    isLoading: false
                })
            }
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        })
    }

    getDataLocal = async () => {
        let token = await AsyncStorage.getItem('key_token');
        if (token) {
            this.getProfile(token);
            return
        } else {
            this.setState({
                isLoading: false
            })
        }

    }

    _onPress = (id) => {
        switch (id) {
            case 0:
                NavigationService.navigate(screenNames.ORDER_SCREEN)
                break;
            case 1:
                NavigationService.navigate(screenNames.ADDRESS_SCREEN)
                break;
            case 2:
                NavigationService.navigate(screenNames.VOURCHER_SCREEN, {typeVoucher: TYPE_VOUCHER_VIEW})
                break;
            case 3:

                break;
            case 4:
                break;
            default:
                break;

        }
    }

    _renderFlatList = ({ item, index }) => {
        return (
            <ItemProfile item={item} onPress={() => this._onPress(item.id)} />
        )
    }
    _keyExtrator = (item, index) => `${item.id}`

    _onPressGotoProFile = () => {
        NavigationService.navigate(screenNames.DETAIL_PROFILE_SCREEN, { onReloadWhenSave: this._onReloadWhenSave })
    }

    _onReloadWhenSave = (item) => {
        if (item) {
            this.setState({
                isLoading: true
            }, () => {
                this.setState({
                    avatar: item.uri,
                    name: item.name,
                    email: item.email,
                    isLoading: false
                })
            })
            return;
        }
        return
    }

    render() {
        const { isLoading, token, name, avatar, email } = this.state;
        return (
            (isLoading) ? <Loading /> :
                (token) ?
                    (
                        <View style={styles.container}>
                            <Header checkScreens={screenNames.PROFILE_SCREEN} />
                            <View style={styles.body}>
                                <TouchableOpacity style={styles.containerImage} onPress={() => this._onPressGotoProFile()}>
                                    <View style={styles.sub_image}>
                                        <Image source={[avatar !== "" ? { uri: avatar } : R.images.profile.ic_avatar]} style={styles.image} />
                                    </View>
                                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                                        <Text style={styles.textName}>{name !== "" ? name : "Không thể hiển thị"}</Text>
                                        <Text>{email !== "" ? email : "Không thể hiển thị"}</Text>
                                    </View>
                                    <Image
                                        source={R.images.profile.ic_right}
                                        resizeMode="contain"
                                        style={styles.backLeft} />
                                </TouchableOpacity>
                                <View style={styles.group}>
                                    <FlatList
                                        data={itemIcons}
                                        renderItem={this._renderFlatList}
                                        keyExtractor={this._keyExtrator}
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={this.onClickLogout}
                                    style={styles.buttonLogout}>
                                    <Text style={styles.textButtonLogout}>Đăng xuất</Text>
                                </TouchableOpacity>
                            </View>
                        </View>) :
                    (<LoginRequireScreen />)
        )
    }

    getToken = async () => {
        token = await AsyncStorage.getItem("key_token");
        if (token == null) {
            return;
        }
        this.setState({
            token: token
        })
    }

    onClickLogout = () => {
        AsyncStorage.clear()
        NavigationService.reset("tabStack")
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    icon: {
        width: 24,
        height: 24,
        marginTop: 4
    },

    group: {
        flex: 3,
        paddingLeft: 10
    },

    buttonLogout: {
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 30,
    },

    textButtonLogout: {
        color: '#DA251B',
        fontSize: 20,
        fontWeight: '500'
    },
    containerImage: {
        width: width,
        height: width / 4,
        borderBottomWidth: 4,
        borderColor: '#D3D3D3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingLeft: 10,

    },
    image: {
        width: width / 4 - 10,
        height: width / 4 - 10,
        borderRadius: width / 4 - 10,
    },
    sub_image: {
        width: width / 4 - 10,
        height: width / 4 - 10,
    },
    body: {
        flex: 1,
        paddingVertical: 3,

    },
    textName: {
        fontSize: PixelRatio.get() <= 2 ? 14 : 16,
        fontWeight: 'bold'
    },
    backLeft: {
        width: 16,
        height: 16,
        marginRight: 15,
    }
})