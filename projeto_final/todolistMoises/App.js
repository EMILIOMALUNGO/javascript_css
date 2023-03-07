import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes'
import { AuthProvider } from './context/Auth';
import { ListProvider } from './context/ListCreate';
import { ListProductProvider } from './context/ListProductCreate';

export default function App() {
  return (
      <AuthProvider>
        <ListProvider>
          <ListProductProvider>
          <NavigationContainer>
              <Routes />
          </NavigationContainer>
          </ListProductProvider>
        </ListProvider>
      </AuthProvider>
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
