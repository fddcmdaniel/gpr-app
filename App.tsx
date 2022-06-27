import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ControlPanel from './src/pages/ControlPanel';
import Dashboard from './src/components/Dashboard/Dashboard';
import SystemToogle from './src/components/SystemToogle';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerRight: () => (
            <SystemToogle />
          ),
        }}  >
          <Stack.Screen name="Login" component={Login} options={{ headerRight: undefined }} />
          <Stack.Screen name="ControlPanel" component={ControlPanel} options={{ title: "Control Panel" }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerBackVisible: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
