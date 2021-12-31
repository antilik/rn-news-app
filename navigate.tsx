import React from 'react';

import Main, {INewsItem} from './components/Main';
import FullInfo from "./components/FullInfo";

import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

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
        options={{title: "Main"}}
      />
      <Stack.Screen
        name={'FullInfo'}
        component={FullInfo}
        options={{title: "Article"}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
