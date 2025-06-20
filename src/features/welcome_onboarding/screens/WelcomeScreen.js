import { View, StyleSheet } from 'react-native'
import Onboarding from '../components/Onboarding';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyButton from '../../../components/button/MyButton';
import useWelcomeScreen from '../hooks/useWelcomeScreen';


const WelcomeScreen = () => {

    const {  currentBoard,goToNextBoard} = useWelcomeScreen();
   

    //assets urls
    const boardImg1 = require('../../../../assets/images/thinking.png');
    const boardImg2 = require('../../../../assets/images/checking_box.png');
    const boardImg3 = require('../../../../assets/images/secured.png');



    return (
        <SafeAreaView style={styles.container}>
            {/* Onboarding section with more space */}
            <View style={styles.onboardingContainer}>

                {currentBoard === 'screen_1' &&

                    <Onboarding
                        illustratorImg={boardImg1}
                        title="Capture Your Thoughts Instantly"
                        subtitle="Quickly jot down anything that comes to mind. No distractions, just your words"
                    />


                }

                {currentBoard === 'screen_2' &&

                    <Onboarding
                        illustratorImg={boardImg2}
                        title="Organize with Ease"
                        subtitle="Use folders and tags to keep your notes clean and easy to find"
                    />


                }

                {currentBoard === 'screen_3' &&

                    <Onboarding
                        illustratorImg={boardImg3}
                        title="Your Notes, Safe and Synced"
                        subtitle="All your notes are stored securely and can be synced across devices"
                    />


                }



            </View>

            {/* Button section with less space */}
            <View style={styles.buttonContainer}>
                <MyButton
                    btnTitle="Get started"
                    width="50%"
                    onPress={goToNextBoard}
                    
                />
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    onboardingContainer: {
        flex: 5, // takes more space (e.g., 75%)
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1, // takes less space (e.g., 25%)
        justifyContent: 'center',
        alignItems: 'center',
    },
});
