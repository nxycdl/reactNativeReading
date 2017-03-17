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
import OrderListItem from '../component/OrderListItem'



export default class TakeOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isRefreshing: false
        }
    }

    componentDidMount() {
        this._onRefresh();

    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        console.log(this.state.isRefreshing);

        setTimeout(() => {
            this.setState({
                data: data.orderData,
                isRefreshing: false
            })
        }, 1000)

    }

    render() {
        return (
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
                <Text style={{textAlign: "center", color: "#999", fontSize: px2dp(12), paddingTop: 20}}>{"近期订单"}</Text>
                {
                    this.state.data.map((item, i)=> {
                        return <OrderListItem key={i} {...item}/>
                    })
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
