/**
 * MAPD712 - group 10 - milestone2 
 * 
 * GROUP 10 MEMBERS
 * Matthew Maxwell        301200258
 * Poojan Patel           301228811
 * Sanjeevan Pashparaj    301213104
 * Divyesh Solanki        301194819
 * Vidhu Gaba             301210694
 * 
 * we named the app weCare hopefully thats not an issue since we will continue
 *  to work onit for milestone 3
 * me
 */
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView, Alert,StatusBar, ScrollView, View,TextInput, Button } from 'react-native';


export default function AddRecordScreen({navigation})
{
  //variables and setters
  const [bloodPressure, setBloodPressure] = useState(" ");
  const [RespirationRate, setRespirationRate] = useState(" ");
  const [bloodOxygen, setBloodOxygen] = useState(" ");
  const [heartBeatRate, setHeartBeatRate] = useState(" ");

  //check if fields are empty
  const validation = () => 
  {
    if(bloodPressure === " ")
    {
      Alert.alert("must enter blood Pressure of patient")
      
      if(RespirationRate === " ")
      {
        Alert.alert("must enter respiration rate of patient")
        if(bloodOxygen === " ")
        {
          Alert.alert("must enter blood oxygen level of patient")
          if(heartBeatRate === " ")
          {
            Alert.alert("must enter heart beat rate of patient")
          }
        }
      }
    }//end of nested if
  
    //store patient data
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
    // navigate to home screen
    navigation.navigate('HomeScreen')
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
            <Text style={styles.logo}>Medical information</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.label}>Blood Pressure</Text>
            <TextInput
                style={styles.input}
                onChange={text => setBloodPressure(text)}  
              />

            <Text style={styles.label}>Respiratory Rate </Text>
            <TextInput
                style={styles.input}
                onChange={text => setRespirationRate(text)}  
              /> 
            
            <Text style={styles.label}>Blood Oxygen</Text>
            <TextInput
                style={styles.input}
                onChange={text => setBloodOxygen(text)}  
              />

            <Text style={styles.label}>Heartbeat Rate</Text>
            <TextInput
                style={styles.input}
                onChange={text => setHeartBeatRate(text)}  
              /> 
        </View> 
        
        <View>
            <Button
                title={'Create Patient'}
                onPress = {validation}/>
        </View>
      </ScrollView>
    </SafeAreaView>
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