import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Tasks from './src/pages/Tasks';
import NewTask from './src/pages/NewTask';
import Details from './src/pages/Details';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tasks'>
        <Stack.Screen 
        name='Tasks' 
        component={Tasks}
        options={{
          headerTintColor: "#f92e6a"
          }}/>

        <Stack.Screen 
        name='New Task' 
        component={NewTask}
        options={{
          headerTintColor: "#f92e6a"
          }}/>

        <Stack.Screen 
        name='Details' 
        component={Details}
        options={{
          headerTintColor: "#f92e6a"
          }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
