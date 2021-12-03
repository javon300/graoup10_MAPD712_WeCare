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
import { StyleSheet, Text, SafeAreaView,StatusBar, ScrollView, View,TextInput, Button } from 'react-native';
import { Record} from '../model/record'
import { getDBConnection, saveRecords } from '../model/db-service';



export default function AddRecordScreen({navigation})
{
  
  const [records, setRecords] = useState<Record[]>([]);
  var newRecord: Record; 
   
  //take new string and add to list of items
  const addRecord = async() =>
  {
    //if record has a then add record to record array
    if(!newRecord.bloodPressure.trim()) return;
    try
    {
      const newRecords = [...records, {
        id: records.length ? records.reduce((acc, cur) => {
          if(cur.id > acc.id) return cur;           //this is another way to do an if else statement
          return acc;                                //this is an else statement
        }).id+1:0, bloodPressure: newRecord.bloodPressure, respirationRate: newRecord.respirationRate, bloodOxygen: newRecord.bloodOxygen, heartbeatRate: newRecord.heartbeatRate
      }];
  
      setRecords(newRecords); //array of records merge with new record
  
      //database create or opened
      const db = await getDBConnection();
  
      //saves record to database
      await saveRecords(db, newRecords);
      console.log("added to database")
      newRecord.bloodPressure = '';                //reset newRecord name to empty since is main value used to decide if data should be added
    }
    catch (error) 
    {
      console.error(error);
      console.log("unable to create/open database")
    }
  };  //addToDo close
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
            <Text style={styles.logo} >Medical information</Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.label}>Blood Pressure</Text>
            <TextInput
                style={styles.input} onChangeText = {text=> newRecord.bloodPressure = text}/>

            <Text style={styles.label}>Respiratory Rate </Text>
            <TextInput
                style={styles.input} onChangeText = {text=> newRecord.respirationRate = text}/> 
            
            <Text style={styles.label}>Blood Oxygen</Text>
            <TextInput
                style={styles.input} onChangeText = {text=> newRecord.bloodOxygen = text}/>

            <Text style={styles.label}>Heartbeat Rate</Text>
            <TextInput
                style={styles.input} onChangeText = {text=> newRecord.heartbeatRate = text}/> 
        </View> 
        
        <View>
            <Button
                title={'Create Record'}
                onPress = {addRecord} />
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