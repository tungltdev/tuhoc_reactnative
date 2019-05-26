/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorldApp from './src/screens/Helloword/HelloWorldApp';
import Bananas from './src/screens/Bananas/Bananas';
import BlinkApp from './src/screens/Blink/Blink';
import LotsOfStyles from './src/screens/demoview/LotsOfStyles';
import FixedDimensionsBasics from './src/screens/demoview/FixedDimensionsBasics';
import FlexDimensionsBasics from './src/screens/demoview/FlexDimensionsBasics';
import FlexDirectionBasics from './src/screens/demoview/FlexDirectionBasics';
import JustifyContentBasics from './src/screens/demoview/JustifyContentBasics';
import PizzaTranslator from './src/screens/demoview/PizzaTranslator';
import ButtonBasics  from './src/screens/demoview/ButtonBasics';
import Touchables from './src/screens/demoview/Touchables';
import IScrolledDownAndWhatHappenedNextShockedMe from './src/screens/demoview/IScrolledDownAndWhatHappenedNextShockedMe';
import WelcomeScreen from './src/screens/WelcomeScreen';
import FlatListBasics from './src/screens/demoview/FlatListBasics';
import FetchExample from './src/screens/demoview/FetchExample';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => FetchExample);
