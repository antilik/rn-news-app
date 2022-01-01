import { Button, StyleSheet, ScrollView, TextInput, View } from 'react-native';
import {Formik} from "formik";

import { INewsItemShort } from "./Main";

interface IFormProps {
  addArticle: (values: INewsItemShort) => void;
}

export default function Form({ addArticle}: IFormProps) {

  const onSubmitHandler = (values: INewsItemShort, action: any) => {
    addArticle(values);
    action.resetForm();
  }

  return(
    <View>
      <Formik
        initialValues={{ name: '',  anons: '', full: '', img: ''}}
        onSubmit={onSubmitHandler}
      >
        {
          ({values, handleChange, handleSubmit}) => (
            <ScrollView>
              <TextInput
                style={styles.input}
                value={values.name}
                placeholder='Write the name'
                onChangeText={handleChange('name')}
              />
             <TextInput
               style={styles.input}
                value={values.anons}
                multiline
                placeholder='Write the anons'
                onChangeText={handleChange('anons')}
              />
             <TextInput
               style={styles.input}
                value={values.full}
                multiline
                placeholder='Write the full article'
                onChangeText={handleChange('full')}
              />
             <TextInput
               style={styles.input}
                value={values.img}
                placeholder='Write the img'
                onChangeText={handleChange('img')}
              />
              <View style={styles.addArticle}>
                <Button
                  title='Add information'
                  onPress={(_) => handleSubmit()}
                />
              </View>

            </ScrollView>
          )
        }
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 15,
    padding: 15,
    borderColor: 'silver',
    borderRadius: 15,
  },
  addArticle: {
    marginVertical: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
