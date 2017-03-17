/**
 * Created by Administrator on 2017-03-15.
 */
import React, {Component} from 'react' ;
import {View, Text, Dimensions, StyleSheet, Animated, Image} from 'react-native';
/*图标使用图标字体的时候需要现在图标文件到assets的fonts目录下面*/
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from 'react-native-tab-navigator';
import px2dp from '../../util';
let {width, height} = Dimensions.get('window');
import HomePage from '../pages/Home';
import My from '../pages/My';
import Order from '../pages/Order';
import Discover from '../pages/Discover';

export default class TabView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: 'HomePage',
            hideTabBar: false,
        }
        this.tableNames = [
            ["外卖", "logo-google", "HomePage", <HomePage {...this.props}/>],
            ["发现", "ios-compass-outline", "Discover", <Discover {...this.props}/>],
            ["订单", "ios-list-box-outline", "Order", <Order {...this.props}/>],
            ["我的", "ios-contact-outline", "My", <My {...this.props}/>]
        ]
        TabView.hideTabBar = TabView.hideTabBar.bind(this);
        TabView.showTabBar = TabView.showTabBar.bind(this);
    }

    static showTabBar(time) {
        this.setState({hideTabBar: false});
    }

    static hideTabBar(time) {
        this.setState({hideTabBar: true});
    }

    render() {
        /*调试styles*/
        /*console.log('样式调试代码',StyleSheet.flatten(styles.tabbar));*/
        return (
            <TabNavigator
                hidesTabTouch={true}
                tabBarStyle={[styles.tabbar,(this.state.hideTabBar?styles.hide:{})]}
                sceneStyle={{ paddingBottom: styles.tabbar.height }}>
                {
                    this.tableNames.map((item, i)=> {
                        return (
                            <TabNavigator.Item
                                key={i}
                                tabStyle={styles.tabStyle}
                                title={item[0]}
                                badgeText={99}
                                selected={this.state.currentTab === item[2]}
                                selectedTitleStyle={{color:'#3496f0'}}
                                renderIcon={()=><Icon name={item[1]} size={px2dp(22)} color="#666"/>}
                                renderSelectedIcon={()=><Icon name={item[1].replace(/\-outline$/, "")} size={px2dp(22)} color="#3496f0"/>}
                                onPress={()=>{ this.setState({currentTab:item[2]})}}>
                                {item[3]}
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator>

        )
    }
}

const styles = StyleSheet.create({
    tabbar: {
        height: px2dp(46),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'

    },
    tabbarheight: {
        height: 200
    },
    hide: {
        transform: [
            {translateX: width}
        ]
    },
    tabStyle: {
        padding: px2dp(4)
    }
})
