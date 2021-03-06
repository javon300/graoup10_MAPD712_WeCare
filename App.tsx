/**
 * MAPD712 - group 10 - milestone2 
 * 
 * GROUP 10 MEMBERS
 * Matthew Maxwell        301200258
 * Poojan Patel           301228811
 * Sanjeevan Pashparaj    301213104
 * Divyesh Solanki        301194819
 * Vidhu Gaba 
 *  git link: https://github.com/javon300/graoup10_MAPD712_WeCare/settings/access?guidance_task=
 * 
 * 
 * 
 * we named the app weCare hopefully thats not an issue since we will continue
 *  to work onit for milestone 3
 * me
 */


import * as React from 'react';     //imposrt all from react not React from react
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//imposrtcreated screens
import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AddPatientScreen from './app/screens/AddPatientScreen';
import AddRecordScreen from './app/screens/AddRecordScreen';
import SearchPatientScreen from './app/screens/SearchPatientScreen';
import SearchRecordScreen from './app/screens/SearchRecordScreen';
import ViewAllPatientsScreen from './app/screens/ViewAllPatientsScreen';
import ViewAllRecordsScreen from './app/screens/ViewAllRecordsScreen';
import CriticalPatientsScreen from './app/screens/CriticalPatientsScreen';
import SinglePatientDataScreen from './app/screens/SinglePatientDataScreen';
import SinngleRecordDataScreen from './app/screens/SingleRecordDataScreen';


const MyStack = createNativeStackNavigator();

function App()
{
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="LoginScreen" component={LoginScreen} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="SignUpScreen" component={SignUpScreen} options={{
          headerShown: false
        }}/>
        <MyStack.Screen name="AddPatient" component={AddPatientScreen}/>
        <MyStack.Screen name="AddRecord" component={AddRecordScreen} />
        <MyStack.Screen name="SearchPatientScreeen" component={SearchPatientScreen}/>
        <MyStack.Screen name="SearchRecordScreen" component={SearchRecordScreen}/>
        <MyStack.Screen name="ViewAllPatients" component={ViewAllPatientsScreen}/>
        <MyStack.Screen name="ViewAllRecords" component={ViewAllRecordsScreen}/>
        <MyStack.Screen name="CriticalPatients" component={CriticalPatientsScreen}/>
        <MyStack.Screen name="SinglePatientData" component={SinglePatientDataScreen}/>
        <MyStack.Screen name="SingleRecordData" component={SinngleRecordDataScreen}/>
      </MyStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
