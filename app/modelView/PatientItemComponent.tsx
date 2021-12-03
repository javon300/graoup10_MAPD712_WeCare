import React from "react";
import{Text, View, Button} from 'react-native';
import { PatientItem } from "../model/PatientItem";

//this is the containers for displaying the data
//creates a component used to display a single patients details
export const PatientItemComponent: React.FC<{
    patient: PatientItem;
    
}> = ({patient:{id, firstName, lastName, gender, age, healthInsurance, telephone}}) =>{
    return (
        <>
        <Text>{"id: /t" + id}</Text>
        <Text>{"first first name: /t" + firstName}</Text>
        <Text>{"first last name: /t" + lastName}</Text>
        <Text>{"first gender: /t" + gender}</Text>
        <Text>{"first age: /t" + age}</Text>
        <Text>{"first health insurance: /t" + healthInsurance}</Text>
        <Text>{"first telephone: /t" + telephone}</Text>
        </>
    )
}