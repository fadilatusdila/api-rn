import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 180}}>
                <FontAwesome5 name='home' color='blue' size={250} />
                <Text>Tampilan Beranda</Text>
                </View>
            </View>
        );
    }
}

export default Beranda;