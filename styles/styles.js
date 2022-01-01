import { StyleSheet } from 'react-native';

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
    padding: 20,
    marginTop: 5
  },
  header: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#323',
    fontFamily: 'SourceSansPro-light',
    textAlign: 'center',
  },
  titleH3: {
    fontFamily: 'SourceSansPro-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 0,
    color: '#474747'
  },
  newsItem: {
    width: '100%',
    marginBottom: 25,
  },
  name: {
    paddingTop: 10,
    fontSize: 25,
  },
  anons: {
    fontFamily: 'SourceSansPro-light',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 200,
  },
  full: {
    fontFamily: 'SourceSansPro-light',
    fontSize: 20,
    textAlign: 'auto',
    marginTop: 10,
    color: '#000'
  }
});
