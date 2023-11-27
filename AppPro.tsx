import React from "react";

import {
    View,
    Text,
    StyleSheet, //use for styling the component
    useColorScheme //use for dark or light mode
} from 'react-native'

function AppPro(): JSX.Element{
    // The useColorScheme React hook provides and subscribes to color scheme updates from the Appearance module.
    //The Appearance module exposes information about the user's appearance preferences, such as their preferred color scheme (light or dark).
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
        //By default react native has flex-direction as column instead of row as in web. This is mentioned in react native docs. That's why align-items and justify-content behave as opposite to web.
        //styling work on main axis and secondary axis rathar than left and right (used in html) 

        flex: 1,

        //align item work left right
        alignItems: 'center',
        // work on top and bottom
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