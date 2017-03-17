/**
 * Created by dl on 2017-03-17.
 */
import React,{Component} from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    StyleSheet
    } from 'react-native'

import NavBar from './NavBar'
import Item from './Item'
import px2dp from '../../util'
import UserProfile from './UserProfile'
export default class Setting extends Component {
    constructor(props) {
        super(props)
    }

    back() {
        this.props.navigator.pop();
    }

    logout() {
        alert('x')
    }

    gotoProfile() {
        this.props.navigator.push({
            component: UserProfile,
            args: {}
        });
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#f3f3f3"}}>
                <NavBar
                    title="设置"
                    leftIcon="ios-arrow-back"
                    leftPress={this.back.bind(this)}
                    ></NavBar>
                <ScrollView>
                    <Item name="账户安全" onPress={this.gotoProfile.bind(this)}></Item>
                    <Item name="通用"></Item>
                    <Item name="关于我们" first={true}></Item>
                    <Item.Button name="退出登录" first={true}/>
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    center: {
        height: px2dp(46),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    logout: {
        alignItems: "center",
        justifyContent: "space-between",
        borderTopColor: "#f5f5f5"
    }

});