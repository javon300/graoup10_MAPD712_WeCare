import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SignUp({navigation})
{
    return (
      <View style={styles.container}>
        <Text>SignUp screnn</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});