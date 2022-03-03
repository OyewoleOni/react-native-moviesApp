import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export class Card extends PureComponent { 
  render() {
      const {item} = this.props;
    return (
      <TouchableOpacity style={styles}>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    
})

