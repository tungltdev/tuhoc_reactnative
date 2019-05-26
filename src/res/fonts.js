import { Platform } from 'react-native'

const fonts = {
  code: Platform.OS === 'ios' ? null : 'Fira',
  appName: Platform.OS === 'ios' ? null : 'Betania Betania Regular',
  title: Platform.OS === 'ios' ? null : 'HK Nova Medium Narrow',
  content: Platform.OS === 'ios' ? null : 'HK Nova Narrow',
  subContent: Platform.OS === 'ios' ? null : 'HK Nova Light Narrow',
  seeMoreText: Platform.OS === 'ios' ? null : 'Roboto-Light',
  robotoTitle:  Platform.OS === 'ios' ? null : 'Roboto-Medium',
  robotoContent: Platform.OS === 'ios' ? null : 'Roboto-Regular'
}
export default fonts