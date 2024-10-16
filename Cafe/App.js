import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "./components/FirstScreen"; 
import SecondScreen from "./components/SecondScreen";
import ThirdScreen from "./components/ThirdScreen";
import FourScreen from "./components/FourScreen";
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="SecondScreen" component={SecondScreen} />
        <Stack.Screen name="ThirdScreen" component={ThirdScreen} />
        <Stack.Screen name="FourScreen" component={FourScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

