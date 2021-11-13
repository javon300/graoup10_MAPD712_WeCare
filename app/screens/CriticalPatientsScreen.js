import React from 'react';
import { StyleSheet, Text, SafeAreaView, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function CriticalPatientsScreen({navigation})
{
  return (
    <View style={styles.container}>
        <View style={styles.body}>
            <Text style={styles.name}>Ricordo Bramfield</Text>
            <Text style={styles.detail}>Blood pressure: 10.2</Text>
            <Text style={styles.detail}>Respiratory rate: 87</Text>
            <Text style={styles.detail}>Blood oxygen level: 67</Text>
            <Text style={styles.detail}>Heartbeat rate: 78</Text>
        </View> 
        <View style={styles.body}>
            <Text style={styles.name}>Rachel Bramfield</Text>
             <Text style={styles.detail}>Blood pressure: 10.2</Text>
            <Text style={styles.detail}>Respiratory rate: 87</Text>
            <Text style={styles.detail}>Blood oxygen level: 67</Text>
            <Text style={styles.detail}>Heartbeat rate: 78</Text>
        </View> 
        <View style={styles.body}>
            <Text style={styles.name}>Donald Trump</Text>
            <Text style={styles.detail}>Blood pressure: 10.2</Text>
            <Text style={styles.detail}>Respiratory rate: 87</Text>
            <Text style={styles.detail}>Blood oxygen level: 67</Text>
            <Text style={styles.detail}>Heartbeat rate: 78</Text>
        </View>   
    </View> // main view close
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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
