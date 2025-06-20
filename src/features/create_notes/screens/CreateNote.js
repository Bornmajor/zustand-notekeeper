import { View,  StyleSheet,Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { useEffect,useCallback } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomTextInput from '../components/CustomTextInput';
import useCreateNote from '../hooks/useCreateNote';


const CreateNote = () => {

    //accessing navigation object
   const navigation = useNavigation();

   const {
        title,
        setTitle,
        desc,
        setDesc,
        createNewNote
   } = useCreateNote()



    

        const renderRightIcon = useCallback(() => {
            return (
                <Pressable onPress={() => createNewNote()} >
                    <MaterialCommunityIcons name="content-save" size={24} color="white"  style={{ paddingHorizontal: 18 }} />
                </Pressable>
            );
        }, [createNewNote]);

   useEffect(()=>{

    navigation.setOptions({
       headerRight: renderRightIcon
    })

   },[navigation,renderRightIcon]);


  return (
    <View style={styles.container}>


      <CustomTextInput 
      label="Title here"
      state={title}
      setState={setTitle}
      />

       <CustomTextInput 
      label="...Notes"
      multiline={true}
      state={desc}
      setState={setDesc}
      />
    

    </View>
  )
}

export default CreateNote;

const styles = StyleSheet.create({
container:{
    flex:1,
    gap:60,
    paddingHorizontal:10,
    paddingVertical:20
}
});