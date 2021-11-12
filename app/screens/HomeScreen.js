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
            <Text style={styles.Task}>Add Patient Record</Text>
          </TouchableOpacity> 
        </View>

        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPatient')}> 
            <Text style={styles.Task}>View Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('ViewRecord')}> 
            <Text style={styles.Task}>View Patient Record</Text>
          </TouchableOpacity>                    
        </View>

        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllPatients')}> 
            <Text style={styles.Task}>View All Patients</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => navigation.navigate('ViewAllRecords')}> 
            <Text style={styles.Task}>View All Patient Records</Text>
          </TouchableOpacity>        
        </View>
        
        <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CriticalPatients')}> 
            <Text style={styles.Task}>Critical Condition Patients</Text>
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
    fontSize: 40,
    fontWeight: "bold",
  },
  Task: {  
    backgroundColor: 'grey',
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 15,
    marginVertical :10,
    fontWeight: "bold",
    borderWidth: 1,
    paddingHorizontal : 15,
    paddingVertical: 30,
  },
  row: {
    alignContent: 'space-between',
    flexDirection: 'row',
    marginTop:30,
  }
});
