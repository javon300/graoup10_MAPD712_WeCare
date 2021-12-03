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
          style={styles.input}  secureTextEntry={true}/>

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input} secureTextEntry={true}/>
      
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
