import constants from './constants';

export const URL_IMAGE = {
    urlImageCategory: function(img_path) {
        return `${constants.BASE_URL_IMG}/category/${img_path}`
    },
    urlImageProduct: function(img_path) {
        return `${constants.BASE_URL_IMG}/product/${img_path}`
    },
    urlImageDiscount: function(img_path) {
        return `${constants.BASE_URL_IMG}/promotion/${img_path}`
    },
    urlUserAvatar: function(img_path) {
        return `${constants.BASE_URL_IMG}/avatar/${img_path}`
    }
}
