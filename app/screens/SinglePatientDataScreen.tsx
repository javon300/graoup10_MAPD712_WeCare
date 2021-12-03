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
import React, {useState, useCallback, useEffect} from 'react';
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,} from 'react-native';
import { PatientItemComponent } from '../modelView/PatientItemComponent';
import { getDBConnection, getPatient } from '../model/db-service';
import { PatientItem } from '../model/PatientItem';



export default function SinglePatientDataScreen({navigation})
{
  //id number to be received from ViewPatientScreen
  var getID: number = 0;
  const [patients, setPatients] = useState<PatientItem[]>([]);

  const loadDataCallback = async(id: number) =>
  {
  //database or opened
  try {
     const db = await getDBConnection();
     await getPatient(db, id)
  } catch (error) 
  {
    console.log("unable to open dtbase")
  }
};
 
useEffect(()=>{
  loadDataCallback(getID); 
}, [loadDataCallback]);
 


{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          {
            patients.map((patient) => (
              <PatientItemComponent key={patient.id} patient={patient}/>
            ))
          }     
        </View>    
        </ScrollView> 
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'deepskyblue',
    marginHorizontal: 10,
  },
  body: {
    flex: 1,
   marginTop: 20,
   backgroundColor: 'deepskyblue',
   marginHorizontal: '10%',
   marginVertical: '10%',
   width: '100%',
  //  paddingVertical: '20%',
  },
  name: {
    color: 'floralwhite',
    fontWeight: 'bold',
    fontSize: 20,
  },
  detail: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 40,

  },
});
