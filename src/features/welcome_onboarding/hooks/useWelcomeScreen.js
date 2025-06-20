import { useNavigation } from "@react-navigation/native";
import { useState } from "react"
import useAuthStore from "../../../store/useAuthStore";


const useWelcomeScreen = () => {

    //state to manage content
    const [currentBoard, setCurrentBoard] = useState('screen_1');
    const {onLogin} = useAuthStore();
    //accessing navigation object
    const navigation = useNavigation();

    //go to next board
    const goToNextBoard = () => {
        if (currentBoard === 'screen_1') {
            setCurrentBoard('screen_2');
        } else if (currentBoard === 'screen_2') {
            setCurrentBoard('screen_3');
        } else {
           onLogin();
            //navigate to home
         //   navigation.navigate('home');



        }
    }


    return {
        currentBoard,
        goToNextBoard

    }

}

export default useWelcomeScreen