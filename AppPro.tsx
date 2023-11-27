import React from "react";

import {
    View,
    Text,
    StyleSheet, //use for styling the component
    useColorScheme //use for dark or light mode
} from 'react-native'

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() ==='dark' //default syntax
    return(
        <View style={styles.container}>
            <Text style={isDarkMode? styles.whiteText : styles.darkText}>
                hello ji!
                </Text>
        </View>
    )
}

//creating more custom stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //styling work on main axis and secondary axis rathar than left and right (used in html) 
        //align item work left right
        alignItems: 'center',
        //By default react native has flex-direction as column instead of row as in web. This is mentioned in react native docs. That's why align-items and justify-content behave as opposite to web.
        justifyContent: 'center'
    },
    whiteText:{
        color: '#FFFFFF'
    },

    darkText:{
        color: '#000000'
    }
})

export default AppPro