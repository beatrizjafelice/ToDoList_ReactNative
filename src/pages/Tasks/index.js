import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, Text, TouchableOpacity, FlatList} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import database from '../../config/firebase_config'
import styles from './style'

export default function Tasks({navigation}) {
    const [task, setTask] = useState([])

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete()
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = []
            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id})
            })
            setTask(list)
        })
    }, [])
    return(

        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            data={task}
            renderItem={ ( {item} ) => {
                return(
                <View style={styles.taskContainer}>
                    <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => {
                        deleteTask(item.id)
                    }}>

                        <FontAwesome
                            name="star"
                            size={23}
                            color="#F92E6A">

                        </FontAwesome>

                    </TouchableOpacity>
                    <Text
                    style={styles.descriptionTask}
                    onPress={() => {
                        navigation.navigate("Details", {
                            id: item.id,
                            description: item.description
                        })
                    }}>
                        {item.description}
                    </Text>
                </View>)
            }}
            />
            <TouchableOpacity 
            style={styles.newTaskButton}
            onPress={() => navigation.navigate("New Task")}> 
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}