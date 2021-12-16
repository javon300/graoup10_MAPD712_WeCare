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
import { StyleSheet, Text, Alert, View,TextInput, Button, TouchableOpacity} from 'react-native';


export default function SignUpScreen ({navigation})
{

  //variables
  const [password1, setPassword1] = useState(" ");
  const [password2, setPassword2] = useState(" ");
  const [email, setEmail] = useState(" ");

  //password validation
  const validation = () => 
  {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    //if email format is correct
    if(emailRegex.test(email))
    {
      //check if passwords are the same then acccpet 
      if(password1 == password2)
      {
        Alert.alert(
          "Success",
          "account has been created successfully",
          [{ 
              text: "OK", onPress: () => console.log("OK Pressed") 
          }]
        );

        // navigate to home screen
        navigation.navigate('HomeScreen')
      }
      else
      {
        Alert.alert(
          "Failure",
          "passwords do not match",
          [{ 
              text: "OK", onPress: () => console.log("OK Pressed") 
          }]
        );
      }
    } 
    else
    {
      Alert.alert(
        "Failure",
        "not a valid email ",
        [{ 
            text: "OK", onPress: () => console.log("OK Pressed") 
        }]
      );
    }    
  }

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.logo}>Create New Account</Text>
      </View>

      <View style={styles.body}>

        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder={'example@email.com'}
          onChangeText = {text=> setEmail(text)}
        />
        
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input} secureTextEntry={true}
          onChangeText = {text=> setPassword1(text)}
        />

        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input} secureTextEntry={true}
          onChangeText = {text=> setPassword2(text)}
        />
      
        <Button
        style={styles.button}
          title={'Create Account'}
          onPress={() => validation()}>         
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