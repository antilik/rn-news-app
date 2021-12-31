import { Text, View } from 'react-native';
import { useRoute } from "@react-navigation/core";
import { RouteProp } from '@react-navigation/native';

import ImageItem from "./ImageItem";
import { RootStackParamList } from "../navigate";

import { gStyle } from '../styles/styles';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'FullInfo'>;

export default function FullInfo() {
  const route = useRoute<ProfileScreenRouteProp>();
  const { img, name, full } = route.params;

  return (
    <View style={gStyle.main}>
      <ImageItem imgSource={img} />
      <Text style={[gStyle.titleH3, gStyle.name]}>{name}</Text>
      <Text style={gStyle.full}>{full}</Text>
    </View>
  );
}
