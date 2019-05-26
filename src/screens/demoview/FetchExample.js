import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

export class FetchExample extends Component {
    constructor(props){
        super(props);
        this.state ={ isLoading: true}
    }

    componentDidMount(){
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
            this.setState({
              isLoading: false,
              dataSource: responseJson.movies,
            }, function(){
    
            });
    
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    render() {
        if(this.state.isLoading){
            return(
              <View style={{flex: 1, padding: 20,backgroundColor:'red'}}>
                <ActivityIndicator/>
              </View>
            )
          }
      
          return(
            <View style={{flex: 1, paddingTop:20}}>
              <FlatList
                data={this.state.dataSource}
                renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
                keyExtractor={({id}, index) => id}
              />
            </View>
          );
    }
}

export default FetchExample
