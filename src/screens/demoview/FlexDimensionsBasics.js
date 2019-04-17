import React,{Component} from 'react';
import { View } from 'react-native';
import R from 'res/R';

export default class FlexDimensionsBasics extends Component{
    render(){
        return(
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: R.colors.primaryColor}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}