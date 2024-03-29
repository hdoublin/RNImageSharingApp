import React, { useEffect, useState, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './bottomNavigation';
import {
    LoginScreen,
    RegisterScreen,
} from '../screens';

export default StackScreen = () => {
    const Stack = createStackNavigator();

    const [firstScreen, setFirstScreen] = useState("");
    // const { getUserToken } = useContext(AuthContext);
    // const { getUser } = useContext(UserContext);
    // useEffect( ()=> {
    //     getUserToken().then((res)=>{
    //         if (res) {
    //             setFirstScreen("BottomNavigation");
    //             getUser(res);
    //         } else {
    //             setFirstScreen("LoginScreen");
    //         }
    //     });
    // }, [])

    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            // initialRouteName= {firstScreen}
            initialRouteName= {"LoginScreen"}
        >
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
            />
            <Stack.Screen
                name="RegisterScreen"
                component={RegisterScreen}
            />
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNavigation}
            />
        </Stack.Navigator>
    );
}