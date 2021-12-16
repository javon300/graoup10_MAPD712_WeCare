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
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen ({navigation})
{
    return (
      <View style={styles.container}>
       

        <View>
          <Text  style={styles.logo}>WeCare</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddPatient')}> 
            <Text style={styles.Task}>Add Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('AddRecord')}> 
            <Text style={styles.Task}>Add Record</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient')}> 
            <Text style={styles.Task}>View Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('ViewRecord')}> 
            <Text style={styles.Task}>View Record</Text>
          </TouchableOpacity>                    
        </View>

        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllPatients')}> 
            <Text style={styles.Task}>All Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllRecords')}> 
            <Text style={styles.Task}>All Records</Text>
          </TouchableOpacity>        
        </View>
        
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CriticalPatients')}> 
            <Text style={styles.Task}>Crit Patients</Text>
          </TouchableOpacity>          
        </View>
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
  logo: {
    color: 'deepskyblue',

    fontSize: 50,
    fontWeight: "bold",
  },
  Task: {
    color: 'white',   
    backgroundColor: 'deepskyblue',
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical :10,
    fontWeight: "bold",
    borderWidth: 0,
    paddingHorizontal : 15,
    paddingVertical: 30,
  },
  row: {
    alignContent: 'space-between',
    flexDirection: 'row',
    marginTop:30,
  },
  touchOpacity: {
    backgroundColor: 'deepskyblue',
  
  },
});
