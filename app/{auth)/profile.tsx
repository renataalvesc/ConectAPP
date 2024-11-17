import { StyleSheet, Text, View, TextInput} from "react-native";
import{useUser} from '@clerk/clerk-expo'
import { useState } from "react";

export default function Profile(){
    const { user} = useUser()

    const[firstName, setFistName] = useState("user?.firstName")
    const[lastName, setLastName] = useState("user?.lastName")

    return(
        <View>
            {user?.fullName && (
                <Text>{user?.fullName}</Text>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
    }
    input:{
        marginVertical: 4,
        height: 50,
        borderWidth: 1,
        borderColor: '#121212',
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#fff'
    
      },
    
})