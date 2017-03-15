/**
 * Created by dl on 2017-03-15.
 */
import React, {Component} from 'react';
import {View, Platform, Text} from 'react-native';
import Navigation from './app';
export default class rootApp extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Navigation/>
            </View>
        )
    }
}