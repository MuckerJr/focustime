import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { colours } from '../utils/colours';

export const Timing = ({onChangeTime}) => {
  return (
    <View style={styles.timingButton}>
      <Button 
      mode='contained'
      onPress={() => onChangeTime(10)}
      buttonColor={colours.secondary}
      textColor={colours.text}
      >10 mins</Button>
      <Button 
      mode='contained'
      onPress={() => onChangeTime(15)}
      buttonColor={colours.secondary}
      textColor={colours.text}
      >15 mins</Button>
      <Button
      mode='contained'
      onPress={() => onChangeTime(20)}
      buttonColor={colours.secondary}
      textColor={colours.text}
      >20 mins</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    felx: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-evenly",
  }
})