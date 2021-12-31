import {useState} from "react";
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from "@react-navigation/stack";

import {RootStackParamList} from "../navigate";

import { gStyle } from '../styles/styles';

type contactsScreenProp = StackNavigationProp<RootStackParamList, "FullInfo">
export interface INewsItem  {
  key: string;
  name: string;
  anons: string;
  full: string;
}
type TNewsList = Array<INewsItem>;

export default function Main() {
  const navigation = useNavigation<contactsScreenProp>();

  const [news, setNews] = useState<TNewsList>([
    {key: '1', name: 'EVs', anons: 'Mazda and Toyota', full: 'Mazda and Toyota will introduce Level 2 and Level 3 autonomous driver functions on new cars starting next year. Level 2 functionality will be installed on 62% of "self-driving" cars by 2030'},
    {key: '2', name: 'Energy infrastructure', anons: 'South Korea launched a new solar panel', full: 'South Korea launched a new solar panel recycling center to use up to 3,600 tons of discarded panels per year. Over 9,665 tons of discarded solar modules will be discarded in 2023'},
    {key: '3', name: 'Economy', anons: 'Economic flashpoints for 2022 — inflation, workers\' rights, and emerging markets', full: 'Inflation in 2021 rose to a high of 6.9% year-over-year, driven by spikes in products like cars, gas, airfare, and hotels. Underlying inflation on food, housing, and electricity rose a more modest, but still high, 2.8%.'},
  ]);

  const renderNews = ({item}: {item: INewsItem } ) => {
    return (<TouchableOpacity
      onPress={() => {
        navigation.navigate('FullInfo', item);
      }}
    >
      <Text>{item.name}</Text>
      <Text>{item.anons}</Text>
    </TouchableOpacity>)
  };

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={renderNews}
      />
    </View>
  );
}
