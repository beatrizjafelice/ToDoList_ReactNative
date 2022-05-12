import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#FFFFFF"
    },
    label: {
        width:'90%',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color:"#F92E6A"

    },
    textInput: {
        width:'90%',
        marginTop:10,
        padding:10,
        height:50,
        borderBottomWidth: 1,
        borderBottomColor:"#F92E6A",
        marginLeft:'auto',
        marginRight:'auto'

    },
    saveButton: {
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
        fontSize:15,
        fontWeight:'bold'
    }
});

export default styles