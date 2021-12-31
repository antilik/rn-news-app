import { Text, View} from 'react-native';
import {useRoute} from "@react-navigation/core";
import { RouteProp } from '@react-navigation/native';

import { gStyle } from '../styles/styles';
import {RootStackParamList} from "../navigate";

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FullInfo'>;

export default function FullInfo() {
  const route = useRoute<ProfileScreenRouteProp>();
  const {name, full} = route.params;

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{name}</Text>
      <Text>{full}</Text>
    </View>
  );
}
