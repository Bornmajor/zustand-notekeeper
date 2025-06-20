import PropTypes from 'prop-types'
import { Button } from 'react-native-paper'

const MyButton = ({btnTitle = 'Button 1',mode = 'contained',width = '100%',onPress,buttonColor = "#582d3e",...rest}) => {
  return (
    <Button 
     mode={mode}
     style={{width:width}}
     onPress={onPress || null}
     {...rest}
     buttonColor={buttonColor}
    >
    {btnTitle}
    </Button>
  )
}

export default MyButton;

//props validation
MyButton.propTypes = {
  btnTitle: PropTypes.string,
  mode: PropTypes.string,
  width: PropTypes.string,
  onPress: PropTypes.func,
  buttonColor:PropTypes.string
}

// const styles = StyleSheet.create({

// })

