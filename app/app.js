/**
 * Created by Administrator on 2017-03-15.
 */
import React, {Component} from 'react';
import {Navigator, View, StatusBar, Platform} from 'react-native';
import Wrapper from './component/Wrapper';


export default class Navigation extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                {/*//StatusBar组件可以同时加载多个。此时属性会按照加载顺序合并（后者覆盖前者）。一个典型的用法就是在使用Navigator时，针对不同的路由指定不同的状态栏样式，如下：*/}
                <StatusBar backgroundColor="#0398ff" barStyle="light-content">
                </StatusBar>
                {/*//定义启动时加载的路由。路由是导航栏用来识别渲染场景的一个对象。initialRoute必须是initialRouteStack中的一个路由。initialRoute默认为initialRouteStack中最后一项。*/}

                {/*//configureScene[function]可选的函数，用来配置场景动画和手势。会带有两个参数调用，一个是当前的路由，一个是当前的路由栈。然后它应当返回一个场景配置对象*/}
                <Navigator initialRoute={{component: Wrapper}}
                           configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                           renderScene={(route, navigator) => {
                               return <route.component navigator={navigator} {...route.args} />
                           }}
                ></Navigator>
            </View>

        )

    }
}