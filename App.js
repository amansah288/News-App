import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import MenuScreen from './Screens/MenuScreen';


export default function App() {
[splash,setSplash] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{setSplash(false)},3000)
  })

  
  return <>{splash ? (<SplashScreen/>):(<MenuScreen/>)}</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
