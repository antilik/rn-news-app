import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';

import MainStack from './navigate';

import { gStyle } from './styles/styles';

const fonts = () =>
  Font.loadAsync({
    'SourceSansPro-bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-light': require('./assets/fonts/SourceSansPro-Light.ttf'),
  });

export default function App() {
  const [font, setFont] = useState(false);
  if (font) {
    return (
      <SafeAreaView style={gStyle.main}>
        <StatusBar style="auto" />
        <MainStack />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  }
}

// const styles = StyleSheet.create({});
