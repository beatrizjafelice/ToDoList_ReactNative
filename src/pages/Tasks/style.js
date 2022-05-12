import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#FFFFFF",
        paddingTop:20,
    },
    newTaskButton: {
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        left:20,
        backgroundColor:"#F92E6A",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    iconButton: {
        color:"#FFFFFF",
        fontSize:30,
    },
    taskContainer: {
        width:"100%",
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:5
    },
    deleteButton: {
        justifyContent:'center',
        paddingLeft:15,
    },
    descriptionTask: {
        width:'75%',
        alignContent:"flex-start",
        backgroundColor:"#F5F5F5CF",
        padding:12,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:15,
        color:"#282B2DB5"
    }
    
});

export default styles