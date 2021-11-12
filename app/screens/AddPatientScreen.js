import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function AddPatientScreen({navigation})
{
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.logo}>Enter Patient data</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.label}>first name </Text>
            <TextInput
                style={styles.input}/>

            <Text style={styles.label}>last name </Text>
            <TextInput
                style={styles.input}/> 
            
            <Text style={styles.label}>Gender </Text>
            <TextInput
                style={styles.input}/>

            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}/> 

            <Text style={styles.label}>Health Insurance Number </Text>
            <TextInput
                style={styles.input}/> 

            <Text style={styles.label}>telephone </Text>
            <TextInput
                style={styles.input}/> 
        </View> 
        
        <View>
            <Button
                title={'Create Patient'}
                onPress={() => navigation.navigate('HomeScreen')}>
                
            </Button>
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
