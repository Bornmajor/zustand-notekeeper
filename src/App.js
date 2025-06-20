import { registerRootComponent } from 'expo';
import MainNavigation from './navigation/MainNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
  
         <MainNavigation />   
   

  )
}

registerRootComponent(App);

export default App;


