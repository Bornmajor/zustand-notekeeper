import PropTypes from 'prop-types';
import { useEffect } from 'react';
import {  StyleSheet, } from 'react-native'
import { TextInput } from 'react-native-paper';

const CustomTextInput = ({multiline = false,label = 'Type here',state,setState,...rest}) => {

  // useEffect(()=>{
  // console.log(state);
  // },[state])
 
  return (
    <TextInput
      mode='flat'
      multiline={multiline}
      placeholder={label}
      style={{backgroundColor:'transparent'}}
      activeUnderlineColor='#582d3e'

      {...rest}
      value={state}
      onChangeText={(n) => setState(n)}

      />
  )
}

export default CustomTextInput;

CustomTextInput.propTypes = {
multiline: PropTypes.bool,
label: PropTypes.string,
state: PropTypes.string,
setState: PropTypes.func
}

const styles = StyleSheet.create({})