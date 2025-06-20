import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import useStore from '../../../store/useStore';
import NoteCard from '../components/NoteCard';
import EmptyPreview from '../components/EmptyPreview';
import { useFocusEffect } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const HomeScreen = () => {
    const navigation = useNavigation();

    const listNotes = useStore((state) => state.listNotes);
    const IdsToBeDeleted = useStore((state) => state.IdsToBeDeleted);

    const deleteNotes = useStore((state) => state.deleteNotes);

    const allowDeleteNote = useStore((state) => state.allowDeleteNote);

    const disableDeleteNote = useStore((state) => state.disableDeleteNote);


    useEffect(() => {
        console.log(`Ids to be deleted: ${IdsToBeDeleted}`);
    }, [IdsToBeDeleted])


    const renderRightIcon = () => {

        return <>

            {

                !allowDeleteNote ?
                    <Pressable onPress={() => navigation.navigate("createNote")} >
                        <AntDesign name="pluscircle" size={25} color="white" style={{ paddingHorizontal: 15 }} />
                    </Pressable>
                    :
                    <>
                        <Pressable onPress={() => deleteNotes()}>
                            <MaterialIcons name="delete" size={25} color="white" style={{ paddingHorizontal: 10 }} />
                        </Pressable>

                        <Pressable onPress={() => disableDeleteNote()}>
                            <AntDesign name="close" size={25} color="white" style={{ paddingHorizontal: 10 }} />
                        </Pressable>
                    </>





            }




        </>

    }

    useEffect(() => {

        navigation.setOptions({
            headerRight: renderRightIcon
        })

    }, [navigation, allowDeleteNote]);


    return (
        <View style={styles.container}>

            {listNotes.length !== 0 ?
                <FlatList
                    data={listNotes}
                    keyExtractor={(item) => item.id}
                    numColumns={2} // ✅ Two items per row
                    columnWrapperStyle={styles.row} // ✅ Adds spacing between rows
                    contentContainerStyle={styles.contentStyle}
                    renderItem={({ item }) => (
                        <View style={styles.cardWrapper}>
                            <NoteCard title={item.title} content={item.desc} id={item.id} />
                        </View>
                    )}
                />


                :
                //no data
                <EmptyPreview
                    message="No notes" />

            }



        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    contentStyle: {
        paddingBottom: 20,
    },
    row: {
        justifyContent: 'space-between', // even spacing
        marginBottom: 10,
    },
    cardWrapper: {
        width: '48%', // slightly less than 50% to account for spacing
    },
});
