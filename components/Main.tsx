import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from "@react-navigation/stack";

import { RootStackParamList } from "../navigate";
import { newsCollection } from "./newsCollection";
import ImageItem from "./ImageItem";

import { gStyle } from '../styles/styles';

type contactsScreenProp = StackNavigationProp<RootStackParamList, "FullInfo">

export interface INewsItem {
  key: string;
  name: string;
  anons: string;
  full: string;
  img: string;
}

type TNewsList = Array<INewsItem>;

export default function Main() {
  const navigation = useNavigation<contactsScreenProp>();

  const [news, setNews] = useState<TNewsList>(newsCollection);

  const renderNews = ({ item }: { item: INewsItem }) => {
    return (
      <TouchableOpacity
        style={gStyle.newsItem}
        onPress={() => {
          navigation.navigate('FullInfo', item);
        }}
      >
        <Text style={gStyle.titleH3}>{item.name}</Text>
        <Text style={gStyle.anons}>{item.anons}</Text>
        <ImageItem imgSource={item.img} />
      </TouchableOpacity>
    )
  };

  return (
    <View style={gStyle.main}>
      <Text
        style={[gStyle.title, gStyle.header]}
      >Main Page</Text>
      <FlatList
        data={news}
        renderItem={renderNews}
      />
    </View>
  );
}
