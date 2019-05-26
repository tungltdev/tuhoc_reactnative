import React, { Component } from 'react'
import {View,Text,FlatList,StyleSheet} from 'react-native'

export class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
        )
    }
}

export default FlatListBasics

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
       },
       sectionHeader: {
         paddingTop: 2,
         paddingLeft: 10,
         paddingRight: 10,
         paddingBottom: 2,
         fontSize: 14,
         fontWeight: 'bold',
         backgroundColor: 'rgba(247,247,247,1.0)',
       },
       item: {
         padding: 10,
         fontSize: 18,
         height: 44,
       },
})