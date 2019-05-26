import axios from 'axios';
import constants from 'libraries/utils/constants';
import R from 'res/R';
import { API_ENDING } from './apiEnding'
import Database from 'libraries/utils/database'

var instance = axios.create({
    baseURL: constants.BASE_URL_API,
    timeout: constants.SERVER_TIMEOUT,
})

const IS_AUTH = {
    YES: true,
    NO: false,
}

//Dang ky
export function registerByPhoneApi(data) {
    return instance.post(API_ENDING.REGISTER, data)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}

//Dang nhap voi sdt
export function loginByPhoneApi(phone, password) {
    const data = {
        phone: phone,
        password: password
    }
    return instance.post(API_ENDING.LOGIN, data)
        .then((res) => {
            return res.data
        })
        .catch(err => console.log(err))
}

//Lay danh muc san pham
export function getCategoryApi() {
    fetch(API_ENDING.CATEGORY)
}

//Api check tai khoan facebook
export function checkFacebookAccountApi(data) {
    return instance.post(API_ENDING.CHECK_ACC_FB, data)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

// Dang nhap hoac dang ky voi fb
export function loginOrRegisterFacebookApi(data) {
    return instance.post(API_ENDING.LOGIN_WITH_FB, data)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

//Check SDT nguoi dung
export function checkPhoneNumberApi(phone_number) {
    return instance.post(API_ENDING.CHECK_PHONE_NUMBER, {
        phone: phone_number
    })
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

// Quen mat khau
export function forgotPasswordApi(data) {
    return instance.post(API_ENDING.FORGOT_PASSWORD, data)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

function fetch(url, data, isAuth) {
    let headers = null
    if (isAuth) {
        headers = {
            Authorization: constants.PREFIX_TOKEN + Database.getUserToken()
        }
    }
    return instance.get(url, {
        params: {
            ...data
        },
        headers: headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

function post(url, data, isAuth) {
    let headers = null
    if (isAuth) {
        headers = {
            Authorization: constants.PREFIX_TOKEN + Database.getUserToken()
        }
    }
    return instance.post(url, data, {
        headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

function postWithFormData(url, data, isAuth) {
    let headers = null
    if (isAuth) {
        headers = {
            Authorization: constants.PREFIX_TOKEN + Database.getUserToken(),
            'Content-Type': 'multipart/form-data',
        }
    }
    return instance.post(url, data, {
        headers
    }).then(response => {
        return response.data
    }).catch(error => {
        return error;
    })
}

export default apis = {
    fetch,
    post,
    postWithFormData,
    IS_AUTH,
}