import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native'

export default class List extends PureComponent {
  render() {
      const {title, content} = this.props
    return (
        <>
            <View style={styles.list}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
                <FlatList data={content} 
                            horizontal = {true}
                            renderItem={({item}) => <Text>{item.title}</Text>}/>
            </View>
        </>
      
    )
  }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 25
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 20
    },
   
})