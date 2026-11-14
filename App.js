import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Blogs from './components/Blogs';
import MyCustomDrawer from './components/MyCustomDrawer';

const Drawer = createDrawerNavigator();


export default function App() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={props => <MyCustomDrawer {...props} />} 
        initialRouteName="Home"
        screenOptions={{
          drawerActiveBackgroundColor: '#f2bbbb',
          drawerActiveTintColor: '#ffffff',
          drawerInactiveTintColor: '#333333'
        }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Blogs" component={Blogs} />

      
    
    </Drawer.Navigator>
      
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
