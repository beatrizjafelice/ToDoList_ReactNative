import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

import database from '../../config/firebase_config'
import styles from './style'

export default function NewTask({navigation}) {
    const[description, setDescription] = useState(null) 

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            status: false
        })
        navigation.navigate("Tasks")
    }

    return(

        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ex: estudar JavaScript"
                onChangeText={setDescription}
                value={description}
            />

            <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {addTask()}}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}