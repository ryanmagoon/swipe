import React, { Component } from 'react'
import { Dimensions, View, Animated, StyleSheet } from 'react-native'

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
  ball: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
})

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0)
    Animated.sequence([
      Animated.spring(this.position, {
        toValue: { x: width - 60, y: 0 },
      }),
      Animated.spring(this.position, {
        toValue: { x: width - 60, y: height - 60 },
      }),
      Animated.spring(this.position, {
        toValue: { x: 0, y: height - 60 },
      }),
      Animated.spring(this.position, {
        toValue: { x: 0, y: 0 }
      })
    ]).start()
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    )
  }
}

export default Ball
