import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../features/Home/screens/HomeScreen";
import WelcomeScreen from "../features/welcome_onboarding/screens/WelcomeScreen";
import CreateNote from "../features/create_notes/screens/CreateNote";
import useAuthStore from "../store/useAuthStore";


const MainNavigation = () => {

    const Stack = createStackNavigator();

    const { isLogin } = useAuthStore();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#582d3e",
                        elevation: 0, // Android
                        shadowOpacity: 0, // iOS
                        borderBottomWidth: 0, // iOS
                    },
                    headerTitleStyle: {
                        color: "white"
                    },
                    headerTintColor: "white"
                }}
            >
                {!isLogin ?
                    <Stack.Screen
                        component={WelcomeScreen}
                        name="welcome"
                        options={{
                            headerShown: false
                        }}
                    />

                    :

                    <Stack.Group>
                        <Stack.Screen
                            component={HomeScreen}
                            name="home"
                            options={{
                                title: "Notekeeper",
                            }}


                        />

                        <Stack.Screen
                            component={CreateNote}
                            name="createNote"
                            options={{
                                title: "New note",
                            }}
                        />

                    </Stack.Group>

                }






            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default MainNavigation