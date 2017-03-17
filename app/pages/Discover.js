'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    WebView,
    Dimensions,
    } from 'react-native';

const {width, height} = Dimensions.get('window');

/*const url = "http://home.m.duiba.com.cn/chome/index";*/
const url="http://www.baidu.com"

export default class Discover extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <View style={styles.container}>
                <WebView
                    style={{width:width,height:height-20}}
                    source={{uri:url,method: 'GET'}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                    />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop:20,
    },
});  