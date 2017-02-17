'use strict';

import React, {Component} from 'react'
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
const {width, height} = Dimensions.get('window')
const headH = px2dp(isIOS ? 140 : 120)
const InputHeight = px2dp(28)

import {toastShort, toastLong} from '../../util/Toast';


export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            location: '三里屯SOHO',
            hotCaption: ['肯德基', '烤肉', '吉野家', '粥', '必胜客', '一品生煎', '星巴克'],
            hotList: ["热卖套餐", "霸王餐", "年货到新家", "5折优惠餐"],
            scrollY: new Animated.Value(0),
            searchView: new Animated.Value(0),
            modalVisible: false,
            searchBtnShow: true,
            listLoading: false,
            isRefreshing: false
        }
        this.SEARCH_BOX_Y = px2dp(isIOS ? 48 : 43)
        this.SEARCH_FIX_Y = headH - px2dp(isIOS ? 64 : 44)
        this.SEARCH_KEY_P = px2dp(58)
        this.SEARCH_DIFF_Y = this.SEARCH_FIX_Y - this.SEARCH_BOX_Y
        this.SEARCH_FIX_DIFF_Y = headH - this.SEARCH_FIX_Y - headH
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', function () {
            BackAndroid.exitApp(0)
            return true
        })
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({isRefreshing: false});
        }, 2000)
    }

    openLbs() {
        toastShort('lbs')
    }

    /*渲染Header*/
    _renderHeader() {
        let searchY = this.state.scrollY.interpolate({
            inputRange: [0, this.SEARCH_BOX_Y, this.SEARCH_FIX_Y, this.SEARCH_FIX_Y],
            outputRange: [0, 0, this.SEARCH_DIFF_Y, this.SEARCH_DIFF_Y]
        });
        let lbsOpaticy = this.state.scrollY.interpolate({
            inputRange: [0, this.SEARCH_BOX_Y],
            outputRange: [1, 0]
        })
        let keyOpaticy = this.state.scrollY.interpolate({
            inputRange: [0, this.SEARCH_BOX_Y, this.SEARCH_KEY_P],
            outputRange: [1, 1, 0]
        })
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.lbsWeather, {opacity: lbsOpaticy}]}>
                    <TouchableWithoutFeedback onPress={this.openLbs.bind(this)}>
                        <View style={styles.lbs}>
                            <Icon name="ios-pin" size={px2dp(18)} color="#fff"></Icon>
                            <Text style={{
                                fontSize: px2dp(18),
                                fontWeight: 'bold',
                                color: "#fff",
                                paddingHorizontal: 5
                            }}>{this.state.location}</Text>
                            <Icon name="md-arrow-dropdown" size={px2dp(16)} color="#fff"/>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.weather}>
                        <View style={{marginRight: 5}}>
                            <Text style={{color: "#fff", fontSize: px2dp(11), textAlign: "center"}}>
                                {"3°"}
                            </Text>
                            <Text style={{color: "#fff", fontSize: px2dp(11)}}>
                                {"阵雨"}
                            </Text>
                        </View>
                        <Icon name="ios-flash-outline" size={px2dp(25)} color="#fff"/>
                    </View>
                </Animated.View>
                <Animated.View style={{
                    marginTop: px2dp(15),
                    transform: [{
                        translateY: searchY
                    }]
                }}>
                    <TouchableWithoutFeedback onPress={() => {
                    }}>
                        <View style={[styles.searchBtn, {backgroundColor: "#fff"}]}>
                            <Icon name="ios-search-outline" size={20} color="#777"/>
                            <Text style={{fontSize: 13, color: "#666", marginLeft: 5}}>{"输入商家，商品名称"}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </Animated.View>
                <Animated.View style={[styles.keywords, {opacity: keyOpaticy}]}>
                    {
                        this.state.hotCaption.map((item, i) => {
                            return (
                                <TouchableWithoutFeedback key={i}>
                                    <View style={{marginRight: 12}}>
                                        <Text style={{fontSize: px2dp(12), color: '#fff'}}>{item}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })
                    }
                </Animated.View>
            </View>
        )

    }

    _renderHot() {
        return ["热卖套餐", "霸王餐", "年货到新家", "5折优惠餐"].map((item, i) => {
            let styl = {
                0: {
                    borderBottomWidth: 1,
                    borderBottomColor: "#f9f9f9",
                    borderRightWidth: 1,
                    borderRightColor: "#f9f9f9",
                },
                1: {
                    borderBottomWidth: 1,
                    borderBottomColor: "#f9f9f9"
                },
                2: {
                    borderRightWidth: 1,
                    borderRightColor: "#f9f9f9",
                },
                3: {}
            }

            let _render = (i) => {
                <View style={styles.recomWrap}>
                    <View>
                        <Text style={{fontSize: px2dp(14), color: "#333", marginBottom:5}}>{item}</Text>
                        <Text style={{fontSize: px2dp(12), color: "#bbb"}}>{item}</Text>
                    </View>
                    <Image source={LocalImg['hot'+i]} style={{width: 50, height: 50, resizeMode: "contain"}}/>
                </View>
            }
            let ios = <View key={i} style={[styles.recomItem, styl[i], {backgroundColor: "#f5f5f5"}]}>
                <TouchableHighlight style={{flex: 1}} onPress={() => {}}>{_render(i)}</TouchableHighlight>
            </View>
            let android = <View key={i} style={[styles.recomItem, styl[i]]}>
                <TouchableNativeFeedback style={{flex: 1, height: 70}}>{_render(i)}</TouchableNativeFeedback>
            </View>
            return isIOS ? ios : android
        })
    }


    render() {
        return (
            <View>
                <ScrollView
                    style={styles.scrollView}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}
                    scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['#ddd', '#0398ff']}
                            progressBackgroundColor="#ffffff"
                        />
                    }
                >
                    {/*渲染Header*/}
                    {this._renderHeader()}

                    <View style={{backgroundColor: "#fff", paddingBottom: 10}}>
                        <TouchableOpacity>
                            <View style={{height: px2dp(90), paddingHorizontal: 10}}>
                                <Image source={LocalImg.ad1}
                                       style={{height: px2dp(90), width: width - 20, resizeMode: 'cover'}}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.recom}>
                        {this._renderHot()}
                    </View>


                    <Text onPress={toastShort('tostShort')}>
                        header
                    </Text>
                    <Text onPress={toastLong('12345')}>
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
                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: "#0398ff",
        height: headH,
        paddingTop: px2dp(isIOS ? 30 : 10),
        paddingHorizontal: 16
    },
    typesView: {
        paddingBottom: 10,
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    typesItem: {
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    lbsWeather: {
        height: InputHeight,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    placeholder: {
        height: InputHeight,
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        borderRadius: px2dp(14),
        backgroundColor: "#fff",
        alignItems: "center"
    },
    lbs: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    weather: {
        flexDirection: "row",
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        fontSize: 13,
        paddingLeft: 10,
        paddingRight: 10,
        height: InputHeight,
        borderRadius: px2dp(14),
        backgroundColor: "#fff"
    },
    searchHeadBox: {
        height: InputHeight,
        flexDirection: "row",
        alignItems: "center"
    },
    searchBtn: {
        borderRadius: InputHeight,
        height: InputHeight,
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center"
    },
    keywords: {
        marginTop: px2dp(14),
        flexDirection: "row"
    },
    scrollView: {
        marginBottom: px2dp(46)
    },
    recom: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginTop: 10,
        flexWrap: "wrap"
    },
    card: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
    business: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingVertical: 16
    },
    time: {
        paddingHorizontal: 3,
        backgroundColor: "#333",
        fontSize: px2dp(11),
        color: "#fff",
        marginHorizontal: 3
    },
    recomItem: {
        width: width / 2,
        height: 70,
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: "row"
    },
    recomWrap: {
        flex: 1,
        height: 70,
        paddingHorizontal: 16,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    lTimeScrollView: {},
    lTimeList: {
        backgroundColor: "#fff",
        alignItems: "center"
    },
    qtag: {
        fontSize: 12,
        borderWidth: 1,
        color: "#00abff",
        borderColor: "#00abff",
        paddingHorizontal: 4,
        paddingVertical: 3,
        borderRadius: 5
    },
    gift: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    fixSearch: {
        backgroundColor: "#0398ff",
        height: isIOS ? 64 : 42,
        paddingTop: isIOS ? 20 : 0,
        paddingHorizontal: 16,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0
    }
})