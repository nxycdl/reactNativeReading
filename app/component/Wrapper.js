/**
 * Created by Administrator on 2017-03-15.
 */
import React, {Component} from 'react';

import {View, Text} from 'react-native' ;
import TableView from './TableView';
export default class Wrapper extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <TableView navigator={this.props.navigator}/>
            </View>
        )
    }
}