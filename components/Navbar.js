import React from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

class Navbar extends React.PureComponent {
    state = {  }
    render() {
        const {navigation} = this.props;
        return (
            <SafeAreaView>
                <View>
                    <TouchableOpacity onPress={() => {navigation.goBack()}}>
                        <Icon name={'chevron-back'} size={40} color={'#fff'}/>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
           
        );
    }
}

export default Navbar;