/**
 * Created by dl on 2017-03-17.
 */
/**
 * Created by dl on 2017-03-17.
 */
import React,{Component,PropTypes} from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Platform,
    ScrollView,
    AlertIOS,
    RefreshControl,
    TouchableHighlight,
    TouchableNativeFeedback
    } from 'react-native'

import px2dp from '../../util'
import data from '../data'

export default class OrderListItem extends Component {

    constructor(props) {
        super(props);
    }

    static propTypes = {
        title: PropTypes.string.isRequired,
        logo: PropTypes.number,
        state: PropTypes.string,
        time: PropTypes.string,
        info: PropTypes.string,
        price: PropTypes.string
    }

    render() {
        const { title, logo, state, time, info, price } = this.props
        let renderData = (
            <View style={styles.item}>
                <Image source={logo} style={styles.logo} />
                <View style={styles.info}>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: px2dp(14), color:"#333"}}>{title}</Text>
                        <Text style={{fontSize: px2dp(13), color:"#333"}}>{state}</Text>
                    </View>
                    <View style={{paddingBottom: 8,borderBottomWidth: 1,borderBottomColor: "#f9f9f9"}}>
                        <Text style={{fontSize: px2dp(12), color:"#bbb",marginTop: 5}}>{time}</Text>
                    </View>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <Text style={{fontSize: px2dp(13), color:"#aaa"}}>{info}</Text>
                        <Text style={{fontSize: px2dp(13), color:"#333"}}>{price}</Text>
                    </View>
                </View>
            </View>
        )
        return (
            Platform.OS === 'ios' ? (
                <TouchableHighlight style={{marginTop:10}} onPress={()=>{}}>{renderData}</TouchableHighlight>
            ) : (<View style={{marginTop: 10}}><TouchableNativeFeedback
                onPress={()=>{}}>{renderData}</TouchableNativeFeedback></View>)
        )
    }
}


const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        paddingLeft: 16,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingTop: 16
    },
    noData: {
        width: 80,
        height: 80,
        resizeMode: "cover",
        marginBottom: 16
    },
    logo: {
        width: 35,
        height: 35,
        marginRight: 8,
        resizeMode: "cover",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#f5f5f5"
    },
    info: {
        paddingRight: 16,
        flex: 1
    }
})
