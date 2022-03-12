import React, { PureComponent } from 'react'
import { Text, View, FlatList, StyleSheet, Dimensions } from 'react-native'
import { Card } from './Card'
import PropTypes from 'prop-types'

const propTypes = {
    title: PropTypes.string,
    content : PropTypes.array,
}
export class List extends PureComponent {
  render() {
      const {title, content, navigation} = this.props
    return (
        <>
            <View style={styles.list}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View>
                <FlatList data={content} 
                            horizontal = {true}
                            renderItem={({item}) => <Card navigation={navigation} item={item} />}/>
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

List.propTypes = propTypes;

export default List;