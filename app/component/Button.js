/**
 * Created by dl on 2017-03-16.
 */
import React, { Component } from 'react'
import {
    View,
    Platform,
    TouchableHighlight,
    TouchableNativeFeedback
    } from 'react-native'

export default class Button extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let ios = <TouchableHighlight {...this.props}>{this.props.children}</TouchableHighlight>
        let android = <View {...this.props}><TouchableNativeFeedback onPress={this.props.onPress}>{this.props.children}</TouchableNativeFeedback></View>
        let component = Platform.OS ==='ios' ? ios : android
        return (component);
    }
}
