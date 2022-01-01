import { useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from "../navigate";
import { newsCollection } from "./newsCollection";
import ImageItem from "./ImageItem";
import Form from './Form';

import { gStyle } from '../styles/styles';

type contactsScreenProp = StackNavigationProp<RootStackParamList, "FullInfo">

export interface INewsItemShort {
  name: string;
  anons: string;
  full: string;
  img: string;
}

export interface INewsItem extends INewsItemShort {
  key: string;
}

type TNewsList = Array<INewsItem>;

export default function Main() {
  const navigation = useNavigation<contactsScreenProp>();

  const [news, setNews] = useState<TNewsList>(newsCollection);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const addArticle = (article: INewsItemShort) => {
    setNews(oldNews => (
      [{key: Date.now().toString(), ...article }, ...oldNews]
    ));
    setIsOpenModal(false);
  }

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
      <Ionicons
        name='add-circle'
        size={34}
        color='gray'
        style={styles.iconAdd}
        onPress={() => setIsOpenModal(true)}
      />
      <Modal
        style={styles.modalWindow}
        visible={isOpenModal}
      >
        <Ionicons
          name='close-circle'
          size={34}
          color='red'
          style={styles.iconClose}
          onPress={() => setIsOpenModal(false)}
        />
        <View style={gStyle.main}>
          <Text style={[gStyle.titleH3]}>
            Add an article
          </Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <FlatList
        data={news}
        renderItem={renderNews}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalWindow: {
    marginTop: 100,
  },
  iconAdd: {
    textAlign: 'right',
    marginBottom: 10,
  },
  iconClose: {
    textAlign: 'right',
    marginTop: 10,
    paddingTop: 10,
    paddingRight: 10,
  }
})
