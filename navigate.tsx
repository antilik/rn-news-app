import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Main, { INewsItem } from './components/Main';
import FullInfo from "./components/FullInfo";

export type RootStackParamList = {
  Main: undefined;
  FullInfo: INewsItem;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator initialRouteName={'Main'}>
      <Stack.Screen
        name={'Main'}
        component={Main}
        options={
          {
            title: "Main",
            headerStyle: { backgroundColor: '#eb5d3d', height: 90 },
          }
        }
      />
      <Stack.Screen
        name={'FullInfo'}
        component={FullInfo}
        options={{ title: "Article" }}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
