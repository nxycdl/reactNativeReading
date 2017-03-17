/**
 * @author Lei
 * @repo https://github.com/stoneWeb/elm-react-native
 */
'use strict';

import React, { Component } from 'react'
import {
    Text,
    View,
    BackAndroid,
    ScrollView,
    StyleSheet,
    AlertIOS,
    RefreshControl,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    Image,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Dimensions,
    ActivityIndicator,
    Animated
    } from 'react-native'
import LocalImg from '../images'
import px2dp from '../../util'
import Icon from 'react-native-vector-icons/Ionicons'


import data from '../data'


const isIOS = Platform.OS == "ios"
const { width, height } = Dimensions.get('window')
const headH = px2dp(isIOS?140:120)
const InputHeight = px2dp(28)


export default class HomePage extends Component {

    componentDidMount(){
        BackAndroid.addEventListener('hardwareBackPress', function () {
            BackAndroid.exitApp(0)
            return true
        })
    }


    render() {
        return (
            <View>
                <Text>
                    header
                </Text>
                <Text>
                    search
                </Text>
                <Text>
                    caption
                </Text>
                <Text>
                    warpper1
                </Text>
                <Text>
                    warpper2
                </Text>
                <Text>
                    best goods List
                </Text>
                <Text>
                    抢购
                </Text>
                <Text>
                    平直优选
                </Text>
                <Text>
                    推荐xxx
                </Text>
                <Text>
                    推荐商家
                </Text>
            </View>
        )
    }
}