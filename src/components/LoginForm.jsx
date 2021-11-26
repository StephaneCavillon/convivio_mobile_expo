import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput, Checkbox, Button } from 'react-native-paper'
import { Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { theme } from '../styles/theming'

export default function LoginForm (props) {
  const { sendLoginRequest } = props
  const [ remember, setRemember ] = useState(false)

  const loginValidationSchema = Yup.object().shape({
    pseudo: Yup
      .string()
      .required('Veuillez saisir un identifiant'),
    password: Yup
      .string()
      .required('Veuillez saisir un mot de passe'),
  })

  return (
  <Formik
    validationSchema={ loginValidationSchema }
    initialValues= {{
      pseudo: 'jfernandez',
      password: 'azerty',
    }}
    onSubmit={ values => sendLoginRequest({...values, remember:remember})}
  >

    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <View style={styles.container}>
      <Text style={styles.label}>Identifiant</Text>
      <TextInput
        mode='outlined'
        name='pseudo'
        selectionColor={theme.colors.orange}
        activeOutlineColor={theme.colors.orange}
        onChangeText={handleChange('pseudo')}
        onBlur={handleBlur('pseudo')}
        value={values.pseudo}
      />
      <ErrorMessage
        name='pseudo'
        render={msg => <Text style={{color:'red'}}>{msg}</Text>} />
      <Text style={styles.label}>Mot de passe</Text>
      <TextInput
        mode='outlined'
        name='password'
        secureTextEntry={true}
        selectionColor={theme.colors.orange}
        activeOutlineColor={theme.colors.orange}
        onChangeText={handleChange('password')}
        onBlur={handleBlur('password')}
        value={values.password}
      />
      <ErrorMessage
        name='password'
        render={msg => <Text style={{color:'red'}}>{msg}</Text>}/>
      <Checkbox.Item
        label='Se souvenir de moi ?'
        position='leading'
        labelStyle={styles.label}
        style={{ right: 0}}
        color={theme.colors.pureWhite}
        uncheckedColor={theme.colors.pureWhite}
        status={remember ? 'checked' : 'unchecked'}
        name="remember"
        onPress={ () => { setRemember(!remember) }} />

      <Button
        mode='contained'
        style={styles.button}
        color={theme.colors.orange}
        labelStyle={{color: theme.colors.pureWhite}}
        onPress={handleSubmit}
        title="Valider"
      >
        Valider
      </Button>
    </View>
    )}
  </Formik>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  label: {
    color: theme.colors.pureWhite,
  },
  button: {
   borderRadius: 5
  }
})