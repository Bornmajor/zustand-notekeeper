import { useEffect, useState } from "react"
import useStore from "../../../store/useStore"
import { useNavigation } from "@react-navigation/native";
import * as Crypto from 'expo-crypto';

const useCreateNote = () => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');



    const addNote = useStore((state) => state.addNote);
    const listNotes = useStore((state) => state.listNotes);

    //accessing navigation object
    const navigation = useNavigation();

    // useEffect(() => {

    //     console.log(listNotes);
    // }, [listNotes])

    //create note
   const createNewNote = () => {
  const newNote = {
    id: Crypto.randomUUID(),
    title,
    desc,
  };

  addNote(newNote);

  // ✅ Reset navigation stack
  navigation.reset({
    index: 0,
    routes: [{ name: 'home' }],
  });
};



    return {
        title,
        setTitle,
        desc,
        setDesc,
        createNewNote
    }
}

export default useCreateNote