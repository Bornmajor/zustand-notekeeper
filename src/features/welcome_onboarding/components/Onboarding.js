import { Image } from 'expo-image';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native'
import AppLogo from '../../../components/AppLogo';


/**
 * @description - onboarding screen component using WelcomeScreen
 */
const Onboarding = ({
    title = 'Title goes here',
    illustratorImg,
    subtitle = 'Subtitle here',


}) => {

    const imgUrl = illustratorImg || require('../../../../assets/images/thinking.png');
    return (
        <View style={styles.container}>

            <AppLogo />

            <Image
                source={imgUrl}
                style={styles.img}
            />

            <View style={styles.textContainer}>
            <Text style={[styles.title,styles.text]}>{title}</Text>

            <Text style={[styles.subtitleStyle,styles.text]}>{subtitle}</Text>    
            </View>

            



        </View>
    )
}

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex:1
    },
    img: {
        resizeMode: 'contain',
        width: '100%',
        height:undefined,
        aspectRatio: 3/2
    
    },
    title:{
        fontSize:20,
        fontWeight:'700',

    },
    subtitleStyle:{
        fontSize:15
    },
    text:{
        textAlign:'center'
    },
    textContainer:{
        gap:10,
        paddingHorizontal:10,
    }
})

Onboarding.propTypes = {
    title: PropTypes.string,
    illustratorImg: PropTypes.string,
    subtitle: PropTypes.string
}