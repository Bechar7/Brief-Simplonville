import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/page/Home";
import FormPage from "./src/page/FormPage";
import FinalPage from "./src/page/FinalPage";
import {Provider} from "react-redux";
import store from './src/app/store'
import FinalValidationPage from "./src/page/FinalValidationPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                  headerStyle: {
                    backgroundColor: '#CE0033',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
                }}
            />
            <Stack.Screen
                name="FormPage"
                component={FormPage}
                options={{
                  title: 'Déclarer un incident',
                  headerStyle: {
                    backgroundColor: '#CE0033',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  }
            }}
            />
              <Stack.Screen
                  name="FinalPage"
                  component={FinalPage}
                  options={{
                      title: 'Récapitulatif de l\'incident',
                      headerStyle: {
                          backgroundColor: '#CE0033',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      }
                  }}
              />
              <Stack.Screen
                  name="FinalValidationPage"
                  component={FinalValidationPage}
                  options={{
                      title: 'Récapitulatif de l\'incident',
                      headerStyle: {
                          backgroundColor: '#CE0033',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                          fontWeight: 'bold',
                      }
                  }}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
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
