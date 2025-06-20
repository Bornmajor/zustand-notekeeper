import { Image } from 'expo-image';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native'



const EmptyPreview = ({message = 'No items',imgUrl = require('../../../../assets/images/Creativity-bro.png')}) => {

  return (
    <View style={styles.container}>
        <Image 
        style={styles.img}
        source={imgUrl}
        />
      <Text style={styles.messageStyle} >{message}</Text>
    </View>
  )
}

export default EmptyPreview;

EmptyPreview.propTypes = {
    message:PropTypes.string,
    imgUrl:PropTypes.string
}   

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    img:{
        height:undefined,
        width:'70%',
        aspectRatio:3/2
    },
    messageStyle:{
        fontSize:20,
        textAlign:'center'
    }

})