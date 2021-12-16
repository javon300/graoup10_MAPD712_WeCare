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
import { StyleSheet, Text, Alert, ScrollView, SafeAreaView,StatusBar, View,TextInput, Button, } from 'react-native';
import * as SQLite from "expo-sqlite";


export default function AddPatientScreen({navigation})
{
  //variables and setters
  const [fName, setFName] = useState(" ");
  const [lName, setLName] = useState(" ");
  const [gender, setGender] = useState(" ");
  const [age, setAge] = useState(" ");
  const [hInsurance, setHInsurance] = useState(" ");
  const [telephone, setTelephone] = useState(" "); 
  

//open database for web
function openDatabase() {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }


  const db = SQLite.openDatabase("db.db");
  //open database
  React.useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists patient (id integer primary key not null, firstname text, lastname text, gender text, age text, hInsurance text, telephone text);"
      );
    });
  }, []);

  
  return db;
}

//add to database
const add = () => {
  // is text empty?
  if (fName === null || fName === "") {
    
    if (lName === null || lName === "") {
      return false;
    }
    return false;
  }

  db.transaction(
    (tx) => {
      //insert data
      tx.executeSql("insert into patient (firstname, lastname, gender, age, hInsurance, telephone) values (?, ?, ?, ?, ?, ?)", [fName, lName, gender, age, hInsurance, telephone]);
      //get data
      tx.executeSql("select * from patient", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    null,
  );
};

const db = openDatabase();


const validation = () => 
{
  if(fName === " ")
  {
    Alert.alert("must enter first name")
    
    if(lName === " ")
    {
      Alert.alert("must enter last name")
      if(gender === " ")
      {
        Alert.alert("must enter gender")
        if(age === " ")
        {
          Alert.alert("not a valid age,age must be more than 18 years")
          if(hInsurance === " ")
          {
            Alert.alert("must enter Health Insurance")
            if(telephone === " ")
            {
              Alert.alert("must enter telephone")
            }
          }
        }
      }
    }
  }//end of nested if
  add(fName,lName)
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
            <Text style={styles.logo}>Enter Patient data</Text>
        </View>

        <View style={styles.body}>

            <Text style={styles.label}>first name </Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setFName(text)}  
              />

            <Text style={styles.label}>last name </Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setLName(text)}
              /> 
            
            <Text style={styles.label}>Gender </Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setGender(text)}  
              />

            <Text style={styles.label}>Age</Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setAge(text)}  
              /> 

            <Text style={styles.label}>Health Insurance Number </Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setHInsurance(text)}  
              /> 

            <Text style={styles.label}>telephone </Text>
            <TextInput
                style={styles.input}
                onChangeText = {text=> setTelephone(text)}  
              /> 
        </View> 
        
        <View>
            <Button
                title={'Create Patient'}
                onPress={validation}>
                
            </Button>
        </View>
      </ScrollView>
    </SafeAreaView> // main view close
  );
}


function useForceUpdate() {
  const [value, setValue] = useState(0);
  return [() => setValue(value + 1), value];
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
