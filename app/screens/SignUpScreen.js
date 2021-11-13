import React from 'react';
import { StyleSheet, Text, SafeAreaView, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function SignUpScreen ({navigation})
{
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Registration Screen </Text>
      </View>

      <View style={styles.body}>

        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder={'example@email.com'}/>
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}/>

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}/>
      
        <Button
        style={styles.button}
          title={'Create Account'}
          onPress={() => navigation.navigate('HomeScreen')}>         
        </Button>
      </View>

      <View style={styles.noLogIn}>
        <Text>already have an account    </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>SIgn In </Text>
        </TouchableOpacity>
      </View>
  
    </View> // main view close
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
   marginTop: 80,
  },
  noLogIn: {
    marginTop: 20,
    flexDirection: 'row',
   },
   link: {
   color: 'blue',
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
  button: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});
