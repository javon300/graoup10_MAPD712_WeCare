
import {enablePromise, openDatabase, SQLiteDatabase} from 'react-native-sqlite-storage';
import { PatientItem } from './PatientItem';
import { Record } from './record';
// import * as SQLite from 'expo-sqlite';      //changed db manager to this. npm install 

const patientTableName = 'patientData'
const recordTableName = 'recordData'
//ssqlite is a promise based library, because it is synchronious based
enablePromise(true);

//*******************************************************************************************patient database********************************************************** */
export const getDBConnection = async () =>
{
    return openDatabase({name: "${patientTableName}", location:"default"})
}

export const createPatientTable = async (db: SQLiteDatabase) => 
{
    const q = 'CREATE TABLE IF NOT EXISTS ${patientData} (firstName Text not null, lastName Text not null, gender Text not null, age number, healthInsurance Text not null, telephone Text not null);';
   await db.transaction(tx =>{
       tx.executeSql(q);
   });
}


export const savePatientItem = async (db: SQLiteDatabase, patients:PatientItem[]) => 
{
    //pay close attention to the different types of apostrophies inlines to follow
    const insertQuerry = `INSERT OR REPLACE INTO ${patientTableName} (rowid, firstName, lastName, gender, age, healthInsurance, telephone) values` + 
    patients.map(i => `${i.id}, '${i.firstName}', '${i.lastName}', '${i.gender}', ${i.age}, '${i.healthInsurance}', '${i.telephone}')`).join(',');
    db.transaction(tx =>{ tx.executeSql(insertQuerry);});
    };

//delete a patient
export const deletePatientItem = async(db: SQLiteDatabase, id: number) =>
{
    const q = "DELETE FROM ${patientTableName} WHERE rowid = ${id}";
    await db.transaction(tx =>{
        tx.executeSql(q);
    });
}


//delete patient table
export const deletePatientTable = async(db: SQLiteDatabase) =>
{
    const q = "DROP TABLE ${patientTableName}";
     await db.transaction(tx =>{
       tx.executeSql(q);
   });
}


//get all patients
export const getPatientItems = async(db:SQLiteDatabase): Promise<PatientItem[]> => 
{
    try 
    {
        const patientItems: PatientItem[] = [];

        db.executeSql('SELECT rowid as id, firstName, lastName, gender, age, healthInsurance, telephone FROM ${patientTableName}',[],
        (txObj, {rows:{_array}}) =>{_array.map(row => {
            patientItems.push(row);
        })
    } 
    );
          
    return patientItems;  
    } 
    catch (error) 
    {
        console.log(error);
        console.log("unable to get data from database");
        throw Error('Fail to get items from database');
        
    }
}



//get all critical patients. patients with low blood pressure
export const getCriticalPatients = async(db:SQLiteDatabase): Promise<PatientItem[]> => 
{
    try 
    {
        const patientItems: PatientItem[] = [];

        db.executeSql('SELECT rowid as id, firstName, lastName, gender, age, healthInsurance, telephone FROM ${patientTableName WHERE bloodPressure < 12.2}',[],
        (txObj, {rows:{_array}}) =>{_array.map(row => {
            patientItems.push(row);
        })
    } 
    );
          
    return patientItems;  
    } 
    catch (error) 
    {
        console.log(error);
        console.log("unable to get data from database");
        throw Error('Fail to get items from database');
        
    }
}

// retreives a single patient
export const getPatient = async(db: SQLiteDatabase, id: number) =>{
    const q = 'SELECT rowid as id, firstName, lastName, gender, age, healthInsurance, telephone FROM ${patientTableName} WHERE rowid = ${id}';
    db.transaction (tx =>{
        tx.executeSql(q);
    });
}



//*******************************************************************************************record database********************************************************** */

export const createRecordTable = async (db: SQLiteDatabase) => {
    const q = 'CREATE TABLE IF NOT EXISTS records (bloodPressure Text not null, respirationRate Text not null, bloodOxygen Text not null, heartbeatRate Text not null,)';
    db.transaction(tx => {
        tx.executeSql(q);
    }); 
}

//saves a record
export const saveRecords = async (db: SQLiteDatabase, records:Record[]) => {
    
    //pay close attention to the different types of apostrophies inlines to follow
    const insertQuerry = `INSERT OR REPLACE INTO ${records} (rowid, bloodPressure, respirationRate, bloodOxygen, heartbeatRate) values` + 
    records.map(i => `${i.id}, '${i.bloodPressure}', '${i.respirationRate}', '${i.bloodOxygen}', '${i.heartbeatRate}')`).join(',');
    return  db.executeSql(insertQuerry);
}


//delete a record //not used in app demo 
export const deleteRecord = async(db: SQLiteDatabase, id: number) =>{
    const q = 'DELETE FROM records WHERE rowid = ${id}';
    db.executeSql(q);
}

//retreive a record
export const getRecord = async(db: SQLiteDatabase, id: number) =>{
    const q = 'SELECT rowid as id, bloodPressure, respirationRate, bloodOxygen, heartbeatRate FROM records WHERE rowid = ${id}';
    db.executeSql(q);
}


//get all records
export const getRecords = async(db:SQLiteDatabase):Promise<Record[]> => {
    try 
    {
        const items: Record[] = [];

        db.executeSql('SELECT rowid as id, bloodPressure, respirationRate, bloodOxygen, heartbeatRate  FROM records',[],
            ( txObj, {rows:{_array}}) => {_array.map(row => {
                items.push(row);
            })}   
        );

    return items;
        
    } catch (error) 
    {
        console.log(error);
        console.log("unable to get data from database");
        throw Error
        
    }
}
