import { Component } from 'react';
import React from 'react';
import { Text,View } from 'react-native';

export default class Dailypics extends Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    Daily Pics
                </Text>
            </View>
        )
    }
}