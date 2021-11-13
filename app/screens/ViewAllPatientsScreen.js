import React from 'react';
import { StyleSheet, Text,ScrollView, SafeAreaView, StatusBar, View,} from 'react-native';


export default function ViewAllPatientsScreen({navigation})
{
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
              <Text style={styles.name}>Ricordo Bramfield</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View> 
          <View style={styles.body}>
          <Text style={styles.name}>Terrane Hassel</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View> 
          <View style={styles.body}>
              <Text style={styles.name}>Donald Trump</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View>

          <View style={styles.body}>
              <Text style={styles.name}>Donald Hassel</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View>  

          <View style={styles.body}>
              <Text style={styles.name}>Sandrea Trump</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View>

          <View style={styles.body}>
              <Text style={styles.name}>Dorthy Penneth</Text>
              <Text style={styles.detail}>Age</Text>
              <Text style={styles.detail}>gender: male</Text>
              <Text style={styles.detail}>Health Insurance: 123441</Text>
              <Text style={styles.detail}>telephone: 23423478</Text>
          </View>    
        </ScrollView> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
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
