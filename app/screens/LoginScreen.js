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
import { StyleSheet, Text,Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function LoginScreen ({navigation})
{
  //variables/setters
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");

  //demo login data
  const cred = 
  [
    {key: 0, eAddress: "admin@thisjob.ca", pWord: "passMan123"},
    {key: 1, eAddress: "Bil@email.ca", pWord: "mellDan2"},
    {key: 2, eAddress: "pat@thisjob.com", pWord: "nomi"},
    {key: 17, eAddress: "pam@thisjob.com", pWord: "Income"},
    {key: 18, eAddress: "fatman@thisjob.com", pWord: "bigFoodYeah", },
  ]

  //function for validating a user
  const validateEmail = () => 
  {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //if email format is correct
    if(emailRegex.test(email))
    {
      cred.forEach(item => 
      {
        if (item.eAddress === email && item.pWord === password) 
        { 
          // navigate to home screen
           navigation.navigate('HomeScreen')
        }
      })
    } 
    else
    {
      Alert.alert(
        "Success",
        "incorrect email or password",
        [ { 
            text: "OK", onPress: () => console.log("OK Pressed") 
          }
        ]
      );
    }
  }
    




  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.logo}>Login Screen </Text>
      </View>

      {/* email and its input field */}
      <View style={styles.body}>
        <Text style={styles.label}>Email </Text>
        
        <TextInput
          style={styles.input}
          placeholder={'example@email.com'}
          onChangeText = {text=> setEmail(text)}
          />

        {/* password and its input field */}
        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input} secureTextEntry={true}
          onChangeText = {text=> setPassword(text)}
        />
      
        <Button
        style={styles.button}
          title={'sign in'}
          onPress={() => validateEmail()}>         
        </Button>
      </View>

      <View style={styles.noLogIn}>
        <Text>Don't have an account?    </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.link}>SIgn Up Now </Text>
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
  logo: {  
    fontSize: 40,
    marginTop:50,
   fontWeight: "bold",
  },
  link: {
    color: 'blue',
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
