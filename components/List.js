import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { Card } from './Card'

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
                            renderItem={({item}) => <Card item={item} />}/>
            </View>
        </>
      
    )
  }
}

const styles = StyleSheet.create({
    list: {
        marginTop: 40
    },
    text : {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 20
    },
   
})