import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Dimensions,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native'
import R from "res/R"

import HeaderCustom from 'libraries/components/HeaderCustom'
import { ADDRESS_SCREEN } from 'libraries/utils/screenName'
import Toast from 'react-native-simple-toast'

const { width, height } = Dimensions.get('window')

class AddressScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listAddress: [
                {
                    id: 0,
                    name: 'Thắng Hoàng',
                    phone: '0974567913',
                    address: {
                        street: 'Số 8 Phan Văn Trường',
                        city: 'Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội'
                    },
                    selected: false,
                },
                {
                    id: 1,
                    name: 'Hiền Vũ',
                    phone: '097456791sss3',
                    address: {
                        street: 'Số 8 Phan Văn Trường',
                        city: 'Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội'
                    },
                    selected: true,
                },
                {
                    id: 2,
                    name: 'Đại Nguyễn',
                    phone: '097456ccac7913',
                    address: {
                        street: 'Số 8 Phan Văn Trường',
                        city: 'Phường Dịch Vọng Hậu, Cầu Giấy, Hà Nội'
                    },
                    selected: false,
                }
            ],
        }
    }

    // render item flatlist
    renderItemAddress = ({ item }) => {
        return (
            <View style={styles.addressItem}>
                <View style={styles.singleInfoView}>
                    <Image
                        source={R.images.profile.ic_infor}
                        resizeMode="contain"
                        style={styles.imageIcon}
                    />
                    <Text style={styles.textName}>{item.name}</Text>
                </View>
                <View style={styles.singleInfoView}>
                    <Image
                        source={R.images.detailProfile.ic_df_phone}
                        resizeMode="contain"
                        style={styles.imageIcon}
                    />
                    <Text style={styles.textPhone}>{item.phone}</Text>
                </View>
                <View style={styles.addressView}>
                    <Image
                        source={R.images.profile.ic_voucher}
                        resizeMode="contain"
                        style={styles.imageIcon}
                    />
                    <View >
                        <Text style={styles.textAddress}>{item.address.street}</Text>
                        <Text style={styles.textAddress}>{item.address.city}</Text>
                    </View>
                </View>
                <View style={styles.buttonGroup}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: width - 70 }}>
                        <TouchableOpacity
                            style={[styles.defaultAddressButton, { backgroundColor: item.selected ? R.colors.red500 : 'white' }]}
                            onPress={() => this.onSelectAddressPress({ item })}
                        >
                            <Text style={item.selected ? styles.textSelectedButtonStyle : styles.textButtonStyle}>Địa chỉ mặc định</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.editbutton}>
                            <Text style={styles.textButtonStyle}>Chỉnh sửa</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => this.onDeleteAddressPress({ item })}
                    >
                        <Image
                            source={R.images.cart_screen.ic_delete}
                            style={styles.imageIcon}
                            resizeMode='contain'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderCustom
                    checkScreens={ADDRESS_SCREEN}
                />
                <FlatList
                    data={this.state.listAddress}
                    renderItem={this.renderItemAddress}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }

    // chọn địa chỉ mặc định
    onSelectAddressPress({ item }) {
        this.setState(prevState => ({
            listAddress: prevState.listAddress.map(
                addressItem => (addressItem.id === item.id ? Object.assign(addressItem, { selected: !item.selected }) : addressItem)
            )
        }))
    }

    onDeleteAddressPress({ item }) {
        Alert.alert(
            'Xác nhận xóa địa chỉ',
            'Bạn có chắc muốn xóa địa chỉ này',
            [
                {
                    text: 'Hủy bỏ',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Đồng ý',
                    onPress: () => this.deleteAddress({ item })
                },
            ],
            { cancelable: false },
        )

    }

    deleteAddress({ item }) {
        this.setState(prevState => ({
            listAddress: prevState.listAddress.filter(
                addressItem => addressItem.id !== item.id
            )
        }))
        Toast.show('Xóa thành công')
    }

    _keyExtractor = (item, index) => (item.id | item.key | index).toString()
}

export default AddressScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8'
    },
    addressItem: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginTop: 6,
        padding: 8,
        height: height / 3 - 30
    },
    imageIcon: {
        width: 24,
        height: 24,
        alignItems: 'center'
    },
    textName: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 12
    },
    textPhone: {
        fontSize: 16,
        paddingLeft: 12
    },
    textAddress: {
        fontSize: 16,
        paddingLeft: 12,
    },
    singleInfoView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressView: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    defaultAddressButton: {
        width: width / 2 - 30,
        height: 50,
        borderWidth: 0.3,
        borderBottomColor: '#999999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editbutton: {
        width: width / 4 + 20,
        height: 50,
        borderWidth: 0.3,
        borderBottomColor: '#999999',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textButtonStyle: {
        fontSize: 15,
        opacity: 0.5
    },
    textSelectedButtonStyle: {
        fontSize: 15,
        color: 'white'
    }
})
