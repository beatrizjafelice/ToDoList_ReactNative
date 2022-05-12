import React, { useState } from 'react'
import {View, Text, TextInput, TouchableOpacity } from 'react-native'

import database from '../../config/firebase_config'
import styles from './style'

export default function Details({navigation, route}) {

    const[descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const taskId = route.params.id

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({
            description: descriptionEdit
        })
        navigation.navigate("Tasks")
    }

    return(

        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ex: estudar JavaScript"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
                
            />
            <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {editTask(descriptionEdit, taskId)}}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>

        </View>
    )
}