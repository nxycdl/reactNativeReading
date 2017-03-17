/**
 * Created by dl on 2017-03-17.
 */
import React,{Component} from 'react'
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

import LocalImg from '../images'
import px2dp from '../../util'
import data from '../data'

import OrderListItem from '../component/OrderListItem'

export default class Breakfast extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: [],
            isRefreshing: false
        }
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
            this.setState({
                data: data.breakFastData,
                isRefreshing: false
            })
        }, 1500)
    }

    _noData(){
        return (
            <View style={{alignItems: "center", paddingTop: 50}}>
                <Image source={LocalImg.noData} style={styles.noData} />
                <Text style={{color: "#aaa"}}>{"无订单记录"}</Text>
            </View>
        )
    }


    render(){
        return(
            <ScrollView
                style={{backgroundColor: "#f3f3f3"}}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#bbb"
                    colors={['#ddd', '#0398ff']}
                    progressBackgroundColor="#ffffff"
                  />
                }
                >
                {
                    (()=>{
                        let data= [<Text key={"title"} style={{textAlign: "center", color: "#999", fontSize: px2dp(12), paddingTop: 20}}>{"早餐订单"}</Text>].concat(this.state.data.map((item,i) =>{
                            return <OrderListItem key={i} {...item} />
                        }))
                        let nodata = this._noData()
                        return this.state.data.length?data:nodata
                    })()
                }
                </ScrollView>
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



