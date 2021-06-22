import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './Stack';
import DrawerMenu from '../components/DrawerMenu'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Stack" drawerContent={props => <DrawerMenu {...props} />}>
            <Drawer.Screen name="Stack" component={StackNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
