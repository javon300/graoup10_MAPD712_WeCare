/**
 * MAPD712 - group 10 - milestone2 
 * 
 * GROUP 10 MEMBERS
 * Matthew Maxwell        301200258
 * Poojan Patel           301228811
 * Sanjeevan Pashparaj    301213104
 * Divyesh Solanki        301194819
 * Vidhu Gaba 
 * 
 * we named the app weCare hopefully thats not an issue since we will continue
 *  to work onit for milestone 3
 * me
 */
import React from 'react';
import { StyleSheet, Text, Alert, ScrollView, SafeAreaView,StatusBar, View,TextInput, Button, } from 'react-native';


export default function AddPatientScreen({navigation})
{

  const btnPressed= () =>
  Alert.alert(
    "Success",
    "Record Added Successfully",
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
                onPress={btnPressed}>
                
            </Button>
        </View>
      </ScrollView>
    </SafeAreaView> // main view close
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
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
