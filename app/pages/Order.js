import React, {Component} from 'react';
import {View, Text} from 'react-native';

import NavBar from '../component/NavBar.js'
import TakeOut from './TakeOut'
import Breakfast from './Breakfast'
import TabViewBar from '../component/TabViewBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'


export default class Order extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar title="设置">
                </NavBar>
                <ScrollableTabView>
                    <TakeOut tabLabel="外卖"/>
                    <Breakfast tabLabel="早餐"/>
                </ScrollableTabView>
            </View>
        )
    }
}