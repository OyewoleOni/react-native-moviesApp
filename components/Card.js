import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'

export class Card extends PureComponent { 
  render() {
      const {item} = this.props;
    return (
      <TouchableOpacity style={styles.container}>
          <Image 
                 style={styles.image} 
                 source={{uri: 'https://image.tmdb.org/t/p/w500'+item.poster_path}}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        position: 'relative',
    },
    image: {
        height: 200,
        width: 120,
        borderRadius: 20
    }
})

