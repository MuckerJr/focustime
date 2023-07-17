import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colours } from '../utils/colours';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({history}) => {

  if(!history || !history.length) return <Text style={styles.title}>We haven't focussed on anything yet</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previous Subjects:</Text>
      <FlatList 
        data={history}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: spacing.md,
    flex: 1,
  },
  item:{
    fontSize: fontSizes.md,
    padding: spacing.sm,
  },
  title: {
    color: colours.text,
    fontSize: fontSizes.md,
    padding: spacing.sm,
    fontWeight: 'bold',
  }
})