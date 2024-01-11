import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Settings from './Settings';
import Home from './Home';

const Tab = createMaterialTopTabNavigator();

function TopNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
export default TopNavigation;