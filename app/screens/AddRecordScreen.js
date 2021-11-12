import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function AddRecordScreen({navigation})
{
    const btnPressed= () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Medical information</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.label}>Blood Pressure</Text>
            <TextInput
                style={styles.input}/>

            <Text style={styles.label}>Respiratory Rate </Text>
            <TextInput
                style={styles.input}/> 
            
            <Text style={styles.label}>Blood Oxygen</Text>
            <TextInput
                style={styles.input}/>

            <Text style={styles.label}>Heartbeat Rate</Text>
            <TextInput
                style={styles.input}/> 
        </View> 
        
        <View>
            <Button
                title={'Create Patient'}
                onPress = {btnPressed} />
        </View>
  
    </View> // main view close
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
   marginTop: 80,
  },
  logo: {  
    fontSize: 40,
    marginTop:50,
   fontWeight: "bold",
  },
  label: {
    fontSize: 20,
    margin: 12,
  },
  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
