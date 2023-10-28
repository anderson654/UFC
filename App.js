import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';
import DrawerNavigation from './src/navigations/DrawerNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './src/contexts/theme';

export default function App() {

  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <SafeAreaProvider>
            <DrawerNavigation />
            <StatusBar style="auto" hidden={false} />
          </SafeAreaProvider>
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
