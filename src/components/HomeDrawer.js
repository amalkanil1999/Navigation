import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Settings from './Settings';

const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen options={{ headerTitleAlign:'center'}} name="HomeDrawer" component={Home} />
      <Drawer.Screen options={{ headerTitleAlign:'center'}}  name="SettingsDrawer" component={Settings} />
    </Drawer.Navigator>
  );
}
export default HomeDrawer;