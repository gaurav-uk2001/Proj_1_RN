import React from "react";

import { 
  View, //similar to div
  Text,
  SafeAreaView // to avoid notches
} from "react-native";

function App(){

  return(
  <SafeAreaView>
  <View>
    <Text>Hello World!</Text>
    <Text>Hello World!</Text>
    <Text>Hello World!</Text>
    <Text>Hello World!</Text>
  </View>
  </SafeAreaView>
  )
}

export default App;