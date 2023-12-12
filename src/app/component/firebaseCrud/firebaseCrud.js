"use client"
import FirebaseConfig from "../firebaseConfig/firebaseConfig"
import {ref, get, set,update, remove, child} from "firebase/database"
import { useState } from "react"

const database = FirebaseConfig();

function FirebaseCrud(){
    const dbRef = ref(database)

    let [username, setUsername] = useState('');
    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    let [date, setDate] = useState('');

    let isNullOrWhitespace = value =>{
        value = value.toString()
        return (value === null || value.replaceAll(' ', '').length < 1 )
    }

    let InsertData = () => {
        if( isNullOrWhitespace(username) 
        || isNullOrWhitespace(title) 
        || isNullOrWhitespace(content) 
        || isNullOrWhitespace(date)){
            alert("fill all fileds")
            return;
        }

        get(child(dbRef, 'Customer/' + username)).then( snapshot => {
            if(snapshot.exists()) {
                alert("the user already exist, try a different user name")
            } else {
                set(ref(database, 'Customer/' + username), {
                    titles: title,
                    contents: content,
                    dates: date
                }).then(()=>{
                    alert("customer inserted successfully")
                })
                .catch((error)=>{
                    console.log(error)
                    alert("there was error inserting the user")
                })
            }
        }) .catch((error)=>{
            console.log(error);
            alert("error data retrieval was unsuccessful")
        })


    }

    let UpdateData = () => {
        if( isNullOrWhitespace(username)){
            alert("user name is empty, try to select a user first, with the select button")
            return;
        }

        get(child(dbRef, 'Customer/' + username)).then( snapshot => {
            if(snapshot.exists()) {
                update(ref(database, 'Customer/' + username), {
                    titles: title,
                    contents: content,
                    dates: date
                }).then(()=>{
                    alert("customer updated successfully")
                })
                .catch((error)=>{
                    console.log(error)
                    alert("there was error updating the user")
                })
            } else {
                alert("error: the user does not existed")
            }
        }) .catch((error)=>{
            console.log(error);
            alert("error data retrieval was unsuccessful")
        })


    }

    let DeleteData = () => {
        if( isNullOrWhitespace(username)){
            alert("user name is required to delete the user")
            return;
        }

        get(child(dbRef, 'Customer/' + username)).then( snapshot => {
            if(snapshot.exists()) {
                remove(ref(database, 'Customer/' + username))
                .then(()=>{
                    alert("customer deleted successfully")
                })
                .catch((error)=>{
                    console.log(error)
                    alert("there was error deleting the user")
                })
            } else {
                alert("error: the user does not existed")
            }
        }) .catch((error)=>{
            console.log(error);
            alert("error data retrieval was unsuccessful")
        })


    }

    let SelectData = () => {

        if( isNullOrWhitespace(username)){
            alert("username is required to retrieve the data")
            return;
        }

        get(child(dbRef, 'Customer/' + username)).then( snapshot => {
            if(snapshot.exists()) {
                setTitle(snapshot.val().titles)
                setContent(snapshot.val().contents)
                setDate(snapshot.val().dates)
            } else {
                alert(" no data ")
            }
        }) .catch((error)=>{
            console.log(error);
            alert("error data retrieval was unsuccessful")
        })
    }

    return(
        <>
            <label>Username</label>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
            <br/>

            <label>Title</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
            <br/>

            <label>content</label>
            <input type="text" value={content} onChange={e => setContent(e.target.value)}></input>
            <br/>

            <label>date</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)}></input>
            <br/>

            <button onClick={InsertData}>Add Data</button>
            <button onClick={UpdateData}>Update Data</button>
            <button onClick={DeleteData}>Delete Data</button>
            <button onClick={SelectData}>Select Data</button>
        </>
    )
}

export default FirebaseCrud