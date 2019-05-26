import { pixelRatio } from 'screens/RootView'

const textSize = {
    header: pixelRatio <= 2 ? 18 : 22,
    title: pixelRatio <= 2 ? 16 : 20,
    subTitle: pixelRatio <= 2 ? 14 : 18,
    content: pixelRatio <= 2 ? 12 : 16,
    subContent: pixelRatio <= 2 ? 10 : 14,
    smallContent: pixelRatio <= 2 ? 8 : 12,
}

const iconSize = {
    basic: pixelRatio <= 2 ? 16 : 20,
    iconButton: pixelRatio <= 2 ? 20 : 24,
}

const buttonSize = {
    bigHeight: pixelRatio <= 2 ? 40 : 45,
}

export default {
    textSize,
    iconSize,
    buttonSize,
}