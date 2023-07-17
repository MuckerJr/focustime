import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { colours } from '../utils/colours';
import { spacing, fontSizes } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode='flat'
          activeOutlineColor={colours.text}
          selectionColor={colours.primary}
          activeUnderlineColor={colours.text}
          textColor={colours.primary}
          label="My focus..."
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <Button
            onPress={() => addSubject(subject)}
            textColor={colours.text}
          >Add Focus</Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'top',
  },
  button: {
    justifyContent: 'center',
    paddingRight: spacing.sm,
  },
  input: {
    backgroundColor: colours.secondary,
    flex: 1,
    marginRight: spacing.md,
  },
});
