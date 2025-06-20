import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'


const AppLogo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../assets/images/app_logo.png')}/>
      <Text style={styles.mainText}>
        <Text style={styles.primaryText}>Note</Text><Text>Keeper</Text>
        </Text>
    </View>
  )
}

export default AppLogo

const styles = StyleSheet.create({
container:{
flexDirection:'row',
gap:15,
alignItems:'center'
},
mainText:{
fontSize:22,
fontWeight:'600'
},
primaryText:{
    color:"#582d3e"
},
img:{
    width:30,
    height:20
}
})