import React, { useEffect, useState, useContext } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import { TextInput, List, Appbar } from 'react-native-paper'
import { ScrollView } from 'react-native-gesture-handler'
import { theme } from '../styles/theming'
import Context from '../utils/context/Context'
import { API } from '../utils/api'
import { Formik } from 'formik'
import * as Yup from 'yup'


// Import composants
import Header from '../components/Header.js'
import Button from '../components/Button'
import UserAvatar from '../components/UserAvatar'

export default function userProfile({ navigation }) {
  const [ loading, setLoading ] = useState(true)
  const [user, setUser] = useState(null)
  const { getUserId } = useContext(Context)

  const getUser = async () => {
    try {
      const storedUser = await getUserId()
      API.get(`/getUser/${storedUser.id}`)
        .then(res => setUser(res.data))
    } catch (err) {
      console.log('error', err.response.request._response)
    }
  }

  const buildInitials = (user) => {
    return {
      ...user,
      company: user?.company.name,
      address: user?.company.address,
      city: user?.company.zipcode?.concat(' ', user?.company.city),
      siret: String(user?.company.siret)
    }
  }

  const buildUserModel = (values) => {
    const city = values.city.split(' ')
    return [{
      firstname: values.firstname,
      lastname: values.lastname,
      company: {
        name: values.company,
        address: values.address,
        city: city[1],
        zipcode: city[0],
        siret: values.siret,
      },
      phone: values.phone,
      mail: values.mail,
    }]
  }

  const updateUser = (values) => {
    try{
      return API.patch(`/updateUser/${values._id}`, buildUserModel(values)[0])
    } catch (err) {
      console.log('error', err)
    }

  }
  const validationSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(2, 'Trop court')
      .max(50, 'Trop long')
      .required('Ce champs est requis'),
    lastname: Yup.string()
      .min(2, 'Trop court')
      .max(50, 'Trop long')
      .required('Ce champs est requis'),
    company: Yup.string()
      .required('Ce champs est requis, indiquez "particulier" pour un particulier'),
    address: Yup.string(),
    city: Yup.string()
      .max(50, 'Cette ville n\'existe pas'),
    zipcode: Yup.string()
      .length(5, '5 Chiffres requis'),
    siret: Yup.number()
      .lessThan(99999999999999, '14 chiffres requis')
      .moreThan(10000000000000, '14 chiffres requis'),
    phone: Yup.string()
      .required('Ce champs est requis'), //.matches('/^(\\+33|0|0033)[1-9]((-|\\/|\\.)\\d{2}){4}$/', 'Le numéro de téléphone n\'est pas valide'),
    mail: Yup.string()
      .email('L\'email n\'est pas valide')
      .required('Ce champs est requis'),
  })

  useEffect(() => {
    if (!user) {
      getUser()
    } else {
      setLoading(false)
    }
  }, [user])

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Appbar.Header style={{ backgroundColor: theme.colors.backdrop }}>
          <Appbar.BackAction onPress={() => { navigation.goBack() }} />
          <Appbar.Content title="Vos informations" />
        </Appbar.Header>
      </View>
      <ScrollView overScrollMode="never">
        <View style={{ backgroundColor: theme.colors.background, flex: 2 }}>
          <Header
            userScreen={true}
          />
          { loading ?
            <ActivityIndicator color={theme.colors.orange}/> :
            <Formik
              enableReinitialize={ true }
              validationSchema={ validationSchema }
              initialValues= { buildInitials(user) }
              onSubmit={ values => updateUser({...values})}
              >
              {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <View style={{ marginHorizontal: 20, flex: 7 }}>
                <View style={{
                  flexDirection: "column",
                  alignItems: "center",
                  top: -55,
                }}>
                  {user ? (
                    <UserAvatar user={user} />
                  ) : null}
                  <Text style={theme.titleTop}>
                    {user.firstname.concat(' ', user.lastname)}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: 'column',
                    marginTop: -25,
                  }}
                >
                  <Text style={{ fontSize: 15, paddingBottom: 5, color: theme.colors.falseBlack }}>Nom</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="lastname"
                    value={values.lastname}
                    onChangeText={handleChange('lastname')}
                    onBlur={handleBlur('lastname')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.lastname && errors.lastname && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.lastname}</Text>
                      )
                    }
                  <Text style={theme.label}>Prénom</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="firstname"
                    value={values.firstname}
                    onChangeText={handleChange('firstname')}
                    onBlur={handleBlur('firstname')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.fistname && errors.fistname && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.fistname}</Text>
                      )
                    }
                  <Text style={theme.label}>Numéro de téléphone</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="phone"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.phone && errors.phone && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.phone}</Text>
                      )
                    }
                  <Text style={theme.label}>E-mail de contact</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="mail"
                    value={values.mail}
                    onChangeText={handleChange('mail')}
                    onBlur={handleBlur('mail')}
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.mail && errors.mail && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.mail}</Text>
                      )
                    }
                  <Text style={theme.label}>Entreprise</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="company"
                    value={values.company}
                    onChangeText={handleChange('company')}
                    onBlur={handleBlur('company')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.company && errors.company && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.company}</Text>
                      )
                    }
                  <Text style={theme.label}>siret</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="siret"
                    value={values.siret}
                    onChangeText={handleChange('siret')}
                    onBlur={handleBlur('siret')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.siret && errors.siret && (
                        <Text style={{ fontSize: 12, color: 'red' }}>{errors.siret}</Text>
                      )
                    }
                  <Text style={theme.label}>Adresse de l'entreprise</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="address"
                    value={values.address}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.address && errors.address && (
                        <Text style={{ fontSize: 30, color: 'red' }}>{errors.address}</Text>
                      )
                    }
                  <Text style={theme.label}>CP et Ville</Text>
                  <TextInput
                    style={theme.input}
                    selectionColor={theme.colors.orange}
                    theme={{ colors: { primary: theme.colors.orange } }}
                    name="city"
                    value={values.city}
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    autoCapitalize='sentences'
                    right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                  />
                  {
                    touched.city && errors.city && (
                        <Text style={{ fontSize: 30, color: 'red' }}>{errors.city}</Text>
                      )
                    }
                  <List.Section style={{ marginTop: 30 }}>
                    <List.Accordion
                      title="Complément d'adresse"
                      titleStyle={theme.title_2}
                    >
                      <Text style={theme.label}>Complément d'adresse</Text>
                      <TextInput
                        style={theme.input}
                        selectionColor={theme.colors.orange}
                        theme={{ colors: { primary: theme.colors.orange } }}
                        placeholder="Ex : Bâtiment C"
                        autoCapitalize='sentences'
                        right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                      />
                      <Text style={theme.label}>Étage</Text>
                      <TextInput
                        style={theme.input}
                        selectionColor={theme.colors.orange}
                        theme={{ colors: { primary: theme.colors.orange } }}
                        placeholder="Ex : 3"
                        right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                      />
                      <Text style={theme.label}>Lieu-dit</Text>
                      <TextInput
                        style={theme.input}
                        selectionColor={theme.colors.orange}
                        theme={{ colors: { primary: theme.colors.orange } }}
                        placeholder="Ex : Tour Eiffel"
                        autoCapitalize='sentences'
                        right={<TextInput.Icon name="pencil" color={theme.colors.orange} />}
                      />
                    </List.Accordion>
                  </List.Section>
                  <View style={{ flex: 0.6 }}>
                    <Button
                      onPress={handleSubmit}
                      title="Mettre à jour"
                    />
                  </View>
                </View>
              </View>
              )}
            </Formik>
          }
        </View>
      </ScrollView>
    </View>
  )
}