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
import React, { useState } from 'react';
import { StyleSheet, Text, Alert, ScrollView, SafeAreaView,StatusBar, View,TextInput, Button, } from 'react-native';
import { PatientItem } from '../model/PatientItem';
import {getDBConnection,  savePatientItem, } from '../model/db-service';
 
export default function AddPatientScreen({navigation})
{

  
const [patients, setPatients] = useState<PatientItem[]>([]);
var newPatient: PatientItem; 
//newPatient.firstName = ' ';  
  //take new string and add to list of items
const addPatient = async() =>
{
  //if patient has a first name then add patient to patient array
  if(!newPatient.firstName.trim()) return;
  try
  {
    const newPatients = [...patients, {
      id: patients.length ? patients.reduce((acc, cur) => {
        if(cur.id > acc.id) return cur;           //this is another way to do an if else statement
        return acc;                                //this is an else statement
      }).id+1:0, firstName: newPatient.firstName, lastName: newPatient.lastName, gender: newPatient.gender, age: newPatient.age, healthInsurance: newPatient.healthInsurance, telephone: newPatient.telephone
    }];

    setPatients(newPatients); //array of patients merge with new patient

    //database create or opened
    const db = await getDBConnection();

    //saves patient to database
    await savePatientItem(db, newPatients);
    console.log("added to database")
    newPatient.firstName = '';                //reset newPatient name to empty since is main value used to decide if data should be added
  }
  catch (error) 
  {
    console.error(error);
    console.log("unable to create/open database")
  }
};  //addToDo close
//**************************************************************************************** */


  //not used 
  const completionAlert= () =>
  Alert.alert(
    "Success",
    "Record Added Successfully",
    [ { 
        text: "OK", onPress: () => console.log("OK Pressed") 
      }
    ]
  );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior = "automatic">
        <View>
            <Text style={styles.logo}>Enter Patient data</Text>
        </View>
    
        <View style={styles.body}>
            <Text style={styles.label}>first name </Text>
            <TextInput
                style={styles.input}  onChangeText = {text=> newPatient.firstName =text}/>

            <Text style={styles.label}>last name </Text>
            <TextInput
                style={styles.input}  onChangeText = {text=> newPatient.lastName =text}/> 
            
            <Text style={styles.label}>Gender </Text>
            <TextInput
                style={styles.input } onChangeText = {text=> newPatient.gender =text}/>

            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}  onChangeText = {text=> newPatient.age = Number(text)}/> 

            <Text style={styles.label}>Health Insurance Number </Text>
            <TextInput
                style={styles.input}  onChangeText = {text=> newPatient.healthInsurance =text}/> 

            <Text style={styles.label}>telephone </Text>
            <TextInput
                style={styles.input}  onChangeText = {text=> newPatient.telephone =text}/> 
        </View> 
        
        <View>
            <Button
                title={'Create Patient'}
                onPress={addPatient}>
                
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
