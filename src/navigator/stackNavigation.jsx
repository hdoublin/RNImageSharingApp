import React, { useEffect, useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigations';
import {
    SplashScreen,
    LoginScreen,
    RegisterScreen,
    MainScreen,
   
} from 'src/screens';

export default StackScreen = () => {
    const Stack = createStackNavigator();

    const [firstScreen, setFirstScreen] = useState("");
    // const { getUserToken } = useContext(AuthContext);
    // const { getUser } = useContext(UserContext);
    useEffect( ()=> {
        getUserToken().then((res)=>{
            if (res) {
                setFirstScreen("MainScreen");
                getUser(res);
            } else {
                setFirstScreen("LoginScreen");
            }
        });
    }, [])

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName= {firstScreen}
        >
            <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
            />
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="BottomScreen"
                component={BottomNavigation}
            />
            <Stack.Screen
                name="MainScreen"
                component={MainScreen}
            />
        </Stack.Navigator>
    );
}