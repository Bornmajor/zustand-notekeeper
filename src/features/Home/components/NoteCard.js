import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useStore from '../../../store/useStore'





const NoteCard = ({ title = 'Card title', content, id }) => {


    const [isActive, setIsActive] = useState(false);

    const  enableDeleteNote = useStore((state) => state.enableDeleteNote);
    const allowDeleteNote = useStore((state) => state.allowDeleteNote);
    const isInDeletedList = useStore((state) => state.IdsToBeDeleted.includes(id)); // ✅ reactive



    const addNotesToBeDeleted = useStore((state) => state.addNotesToBeDeleted);



    const activeDelete = (id) =>{
        //activate onPress to delete
        enableDeleteNote();

        addNotesToBeDeleted(id);

    }


    const selectForDeletion = (id) =>{

      addNotesToBeDeleted(id);


    }



    // useEffect(()=>{
    // console.log(isInDeletedList);
    // },[isInDeletedList])



    return (
        <Pressable
            style={[styles.container, { borderColor: isInDeletedList ? 'red' : "#582d3e" }]}
            onLongPress={() => activeDelete(id)}
            onPress={() => allowDeleteNote && selectForDeletion(id)}
        >
            <Text style={styles.titleStyle}>{title}</Text>

            <Text style={styles.contentStyle}>{content}</Text>

        </Pressable>
    )
}

export default NoteCard;

NoteCard.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        // borderColor:'#582d3e',
        borderRadius: 15,
        gap: 10,
        padding: 15,
        position: 'relative'

    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '600'
    },
    checkboxStyle: {
        position: 'absolute',
        right: 0
    }
})